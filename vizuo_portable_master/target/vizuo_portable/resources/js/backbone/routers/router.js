var LogUtils = function() {
    var isDebug = false;
    return {
        showLog : function(message) {
            if(isDebug === true) {
                console.log(message);
            }
        }
    };
}();

var RouterMapping = function() {
	 // user module start
    var ROUTER_LIST_USER = "users";
    // user module end
    
	return {
		// url : users
	    getRouterListUser : function() {
	        return ROUTER_LIST_USER;
	    },
	};

}();

window.AppRouter = Backbone.Router.extend({
	registerRoute : function(url, name) {
		this.route(url, name);
	},
    moveTo : function(route) {
      router.navigate(route, { trigger : true });
    },
    showView : function(selector, view) {
        if (this.currentView !== undefined) {
            this.currentView.close(); 
        }
        this.currentView = view;
        $(selector).html(this.currentView.render());
        if(this.currentView.pageReady !== undefined) {
            this.currentView.pageReady();
        } else {
            LogUtils.showLog("WARN:: target view does not implement function pageReady()");
        }
    },
    initialize : function() {
    	var routerMapping = RouterMapping;
        this.routerMapping = routerMapping;
        
        // user module start
        // register list user router
        var routerListUser = this.routerMapping.getRouterListUser();
        var routerListUserHandler = "routerListUserHandler";
        this.registerRoute(routerListUser, routerListUserHandler);
        // user module end
    },
    routerListUserHandler : function() {
        console.log("execute list user handler");
        RequireJSUtils.loadUserModule(function() {
            UserService.showUserListView();
        });
    },
});