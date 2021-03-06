var UserService = function() {
    
    var _SERVER_LIST_USER_URL = "authenticated/users";
   
    return {
       
        getListUsers : function(onsuccess, options) {
            AjaxUtils.doGet(_SERVER_LIST_USER_URL, onsuccess, options);
        },
        showUserListView : function() {
        	UserService.getListUsers(function(users) {
        		
        		 RequireJSUtils.loadListUserTemplate(function(tpl) {
        			 router.showView(mainContent, new UserView({
                         tpl : tpl,
                         users : users
                     }));
        		 });
        		
            },AjaxUtils.blockUIAjax());
        },
    };
    
}();



var UserView = Backbone.View.extend({
    
    initialize : function(options) {
        this.users = options.users;
        this.tpl = options.tpl;
    },
    render : function() {
        var renderHtml = _.template(this.tpl, {
            users : this.users,
        });
        return this.$el.html(renderHtml);
    },
    events : {
    	"click a[name='btnReload']" : "reload",
    },
    reload : function() {
        UserService.showUserListView();
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
