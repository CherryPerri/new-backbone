var RequireJSUtils = function() {

    var requireJSBaseUrl = "resources/js/backbone";
    var requireJSPath = {};

    requireJSPath['text'] = "libs/text";

    var dependencyLibs = [];
    // config dependency libs start
    var emsUtilLib = "emsUtilLib";
    var emsUtilLibPath = "utils/ems_util";
    requireJSPath[emsUtilLib] = emsUtilLibPath;
    dependencyLibs.push(emsUtilLib);

    var formWizardUtilsLib = "formWizardUtilsLib";
    var formWizardUtilsLibPath = "utils/form-wizard-utils";
    requireJSPath[formWizardUtilsLib] = formWizardUtilsLibPath;
    dependencyLibs.push(formWizardUtilsLib);
    // config dependency libs end
    
    // config router lib start
    var routerLib = "routerLib";
    var routerLibPath = "routers/router";
    requireJSPath[routerLib] = routerLibPath;
    // config router lib end
    
    // config user module lib start
    var userModuleLib = "userModuleLib";
    var userModuleLibPath = "modules/user/user-module";
    requireJSPath[userModuleLib] = userModuleLibPath;
    // config user module lib end
    
    return {
    	init : function() {
            var requireJSConfig = {
                waitSeconds : 30,
                baseUrl : requireJSBaseUrl,
                shim: {
                    globalConstsLib : {
                        deps: ['emsUtilLib']
                    }
                },
//                urlArgs : "bust=" + (new Date()).getTime(),
                urlArgs : "releaseDate=164400-20212203",// hhmmSS YYYYddMM try set when deploy
                paths : requireJSPath,
            };
            require.config(requireJSConfig);
        },
        loadBreadcrumbTemplate : function(callback) {
            var path = "text!modules/breadcrumb.htm";
            require([path], callback);
        },
        getModuleTemplatePath :function(moduleName, tplName) {
            return "text!modules/" + moduleName + "/" + tplName;
        },
        loadModuleTemplate : function(moduleName, tplName, callback) {
            var path = this.getModuleTemplatePath(moduleName, tplName);
            require([path], callback);
        },
        loadDependencyLibs : function(callback) {
            require(dependencyLibs, callback);
        },
        loadRouterLib : function(callback) {
            require([routerLib], callback);
        },
        // user module start
        loadUserModuleTemplate : function(tplName, callback) {
            this.loadModuleTemplate("user", tplName, callback);
        },
        loadListUserTemplate : function(callback) {
            this.loadUserModuleTemplate("list-user.htm", callback);
        },
        loadUserModule : function(callback) {
            require([userModuleLib], callback);
        },
    };
}();

var router;
var mainContent = $("#ajax-content");

var startTimeDebug = new Date();

(function() {
	
	RequireJSUtils.init();
    RequireJSUtils.loadDependencyLibs(function() {
        RequireJSUtils.loadRouterLib(function() {
        	$(document).ready(function() {
        		
	       		 router = new AppRouter();
	             Backbone.history.start();
	
	       	});
        });
    });
	
})();