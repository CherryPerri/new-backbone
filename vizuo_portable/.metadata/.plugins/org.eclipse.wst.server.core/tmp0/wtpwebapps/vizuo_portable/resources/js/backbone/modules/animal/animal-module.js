var AnimalService = function() {
    
    var _SERVER_LIST_ANIMAL_URL = "authenticated/animals";
   
    return {
       
        getListAnimals : function(onsuccess, options) {
            AjaxUtils.doGet(_SERVER_LIST_ANIMAL_URL, onsuccess, options);
        },
        showAnimalListView : function() {
        	AnimalService.getListAnimals(function(animals) {
        		
        		 RequireJSUtils.loadListAnimalTemplate(function(tpl) {
        			 router.showView(mainContent, new AnimalView({
                         tpl : tpl,
                         animals : animals
                     }));
        		 });
        		
            },AjaxUtils.blockUIAjax());
        },
    };
    
}();



var AnimalView = Backbone.View.extend({
    
    initialize : function(options) {
        this.animals = options.animals;
        this.tpl = options.tpl;
    },
    render : function() {
        var renderHtml = _.template(this.tpl, {
        	animals : this.animals,
        });
        return this.$el.html(renderHtml);
    },
    events : {
    	"click a[name='btnReload']" : "reload",
    },
    reload : function() {
        AnimalService.showAnimalListView();
        return false;
    },
    pageReady : {
    	
    },
    close : function() {
        delete this.viewState;
        delete this.user;
        delete this.tpl;
        this.unbind();
        this.remove();
        delete this.$el;
        delete this.el;
    }
    
});
