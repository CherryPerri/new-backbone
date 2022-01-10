

var App = function () {
	
	var currentPage = ''; // current page
	var collapsed = false; //sidebar collapsed
	var is_mobile = false; //is screen mobile?
	var is_mini_menu = false; //is mini-menu activated
	var is_fixed_header = false; //is fixed header activated
	var responsiveFunctions = []; //responsive function holder
	/*-----------------------------------------------------------------------------------*/
	/*	Check layout size
	/*-----------------------------------------------------------------------------------*/
	var checkLayout = function() {
		//Check if sidebar has mini-menu
		is_mini_menu = $('#sidebar').hasClass('mini-menu');
		//Check if fixed header is activated
		is_fixed_header = $('#header').hasClass('navbar-fixed-top');
	};
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar & Main Content size match
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarAndContentHeight = function () {
        var content = $('#content');
        var sidebar = $('#sidebar');
        var body = $('body');
        var height;

        if (body.hasClass('sidebar-fixed')) {
            height = $(window).height() - $('#header').height() + 1;
        } else {
            height = sidebar.height() + 20;
        }
        if (height >= content.height()) {
            content.attr('style', 'min-height:' + height + 'px !important');
        }
    };
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar
	/*-----------------------------------------------------------------------------------*/
	var handleSidebar = function () {
	jQuery('.sidebar-menu .has-sub > a').click(function () {
            var last = jQuery('.has-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
            
			var thisElement = $(this);
			var slideOffeset = -200;
            var slideSpeed = 200;
			
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
				sub.slideUp(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						App.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						App.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            }
        });
		
	// Handle sub-sub menus
	jQuery('.sidebar-menu .has-sub .sub .has-sub-sub > a').click(function () {
            var last = jQuery('.has-sub-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
                
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(200);
            }
        });
	};
	
	/*-----------------------------------------------------------------------------------*/
	/*	Responsive Sidebar Collapse
	/*-----------------------------------------------------------------------------------*/
	var responsiveSidebar = function () {
		//Handle sidebar collapse on screen width
		var width = $(window).width();
		if ( width < 768 ) {
			is_mobile = true;
			//Hide the sidebar completely
			/*jQuery('#main-content').addClass("margin-left-0");*/ // modify by xuanluc.le 18-11-2014
			jQuery('#page-wrapper').addClass("margin-left-0"); // add by xuanluc.le 18-11-2014
		}
		else {
			is_mobile = false;
			//Show the sidebar completely
			/*jQuery('#main-content').removeClass("margin-left-0");*/ // modify by xuanluc.le 18-11-2014
			jQuery('#page-wrapper').removeClass("margin-left-0"); // add by xuanluc.le 18-11-2014
			var menu = $('.sidebar');
			if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before resizing
				menu.slimScroll({
					destroy: true
				});
				menu.removeAttr('style');
				$('#sidebar').removeAttr('style');
			}
		}
	};
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar Collapse
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarCollapse = function () {
		//Handle sidebar collapse on user interaction
		jQuery('.sidebar-collapse').click(function () {
			handleSidebarCollapse2();
        });
	};
	
	var handleSidebarCollapse2 = function () {
		//Handle mobile sidebar toggle
		if(is_mobile && !(is_mini_menu)){
			//If sidebar is collapsed
			if(collapsed){
				jQuery('body').removeClass("slidebar");
				jQuery('.sidebar').removeClass("sidebar-fixed");
				//Add fixed top nav if exists
				if(is_fixed_header) {
					jQuery('#header').addClass("navbar-fixed-top");
					/*jQuery('#main-content').addClass("margin-left-100");*/ // modify by xuanluc.le 18-11-2014
					jQuery('#page-wrapper').addClass("margin-left-100"); // add by xuanluc.le 18-11-2014
				}
				/*collapsed = false;*/
			}
			else {
				jQuery('body').addClass("slidebar");
				jQuery('.sidebar').addClass("sidebar-fixed");
				//Remove fixed top nav if exists
				if(is_fixed_header) {
					jQuery('#header').removeClass("navbar-fixed-top");
					/*jQuery('#main-content').removeClass("margin-left-100");*/ // modify by xuanluc.le 18-11-2014
					jQuery('#page-wrapper').removeClass("margin-left-100"); // add by xuanluc.le 18-11-2014
				}
				/*collapsed = true;*/
				handleMobileSidebar();
			}
		}
		else { //Handle regular sidebar toggle
			// add by xuanluc.le 18-11-2014
			if(collapsed){
				jQxSplitterUtil.expand();
			} else {
				jQxSplitterUtil.collapse();
			}
//			var iconElem = document.getElementById("sidebar-collapse").querySelector('[class*="fa-"]');
//			var iconLeft = iconElem.getAttribute("data-icon1");
//			var iconRight = iconElem.getAttribute("data-icon2");
//			//If sidebar is collapsed
//			if(collapsed){
//				/* For Navbar */
//				jQuery('.navbar-brand').removeClass("mini-menu");
//				/* For sidebar */
//				jQuery('#sidebar').removeClass("mini-menu");
//				//jQuery('#main-content').removeClass("margin-left-50");
//				/*jQuery('#main-content').removeClass("margin-left-0");*/ // modify by xuanluc.le 19-04-2014
//				/*jQuery('#page-wrapper').removeClass("margin-left-0");*/ // add by xuanluc.le 18-11-2014
//				jQuery('.sidebar-collapse i').removeClass(iconRight);
//				jQuery('.sidebar-collapse i').addClass(iconLeft);
//				/* Add placeholder from Search Bar */
//				jQuery('.search').attr('placeholder', "Search");
//				
//				collapsed = false;
//			}
//			else {
//				/* For Navbar */
//				jQuery('.navbar-brand').addClass("mini-menu");
//				/* For sidebar */
//				jQuery('#sidebar').addClass("mini-menu");
//				//jQuery('#main-content').addClass("margin-left-50");
//				/*jQuery('#main-content').addClass("margin-left-0");*/ // modify by xuanluc.le 19-04-2014
//				/*jQuery('#page-wrapper').addClass("margin-left-0");*/ // add by xuanluc.le 18-11-2014
//				jQuery('.sidebar-collapse i').removeClass(iconLeft);
//				jQuery('.sidebar-collapse i').addClass(iconRight);
//				/* Remove placeholder from Search Bar */
//				jQuery('.search').attr('placeholder', '');
//
//				collapsed = true;
//			}
			$("#main-content").on('resize', function (e) {
				e.stopPropagation();
			});
		}
	};
	
	/*-----------------------------------------------------------------------------------*/
	/*	Handle Fixed Sidebar on Mobile devices
	/*-----------------------------------------------------------------------------------*/
	var handleMobileSidebar = function () {
        var menu = $('.sidebar');
		if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
            menu.slimScroll({
                destroy: true
            });
            menu.removeAttr('style');
            $('#sidebar').removeAttr('style');
        }
        menu.slimScroll({
            size: '7px',
            color: '#a1b2bd',
            opacity: .3,
            height: "100%",
            allowPageScroll: false,
            disableFadeOut: false
        });
    };
	
	/*-----------------------------------------------------------------------------------*/
	/*	Fuel UX Tree
	/*-----------------------------------------------------------------------------------*/
	var handleTree = function () {
		$('#tree3').admin_tree({
			dataSource: treeDataSource,
			multiSelect:true,
			loadingHTML:'<div class="tree-loading"><i class="fa fa-spinner fa-2x fa-spin"></i></div>',
			'open-icon' : 'fa-minus-square',
			'close-icon' : 'fa-plus-square',
			'selectable' : true,
			'selected-icon' : 'fa-check',
			'unselected-icon' : 'fa-times'
		});
	
		
		//To add font awesome support
		$('.tree').find('[class*="fa-"]').addClass("fa");
	};
	
	/*-----------------------------------------------------------------------------------*/
	/*	Handles navbar fixed top
	/*-----------------------------------------------------------------------------------*/
	var handleNavbarFixedTop = function () {
		if(is_mobile && is_fixed_header) {
			//Manage margin top
			/*jQuery('#main-content').addClass("margin-left-100");*/ // modify by xuanluc.le 19-04-2014
			jQuery('#page-wrapper').addClass("margin-left-100"); // add by xuanluc.le 18-11-2014
		}
		if(!(is_mobile) && is_fixed_header){
			//Manage margin top
			/*$('#main-content').removeClass('margin-top-100').addClass('margin-top-50');*/ // modify by xuanluc.le 19-04-2014
			jQuery('#page-wrapper').removeClass("margin-top-100").addClass('margin-top-50'); // add by xuanluc.le 18-11-2014
		}
	};
	/*-----------------------------------------------------------------------------------*/
	/*	Hubspot messenger | add by: xuanluc.le | add date: 02/04/2014
	/*-----------------------------------------------------------------------------------*/
	var handleMessenger = function (msg) {
		//Normal
			var mytheme = $('input[name=theme]:checked').val();
			var mypos = $('input[name=position]:checked').val();
			//Set theme
			Messenger.options = {
				extraClasses: 'messenger-fixed '+mypos,
				theme: mytheme
			};
			//Call
			Messenger().post({
				message: msg,
				showCloseButton: true
			});
	};
	
	/*-----------------------------------------------------------------------------------*/
    /*  Handles the go to top button at the footer
    /*-----------------------------------------------------------------------------------*/
    var handleGoToTop = function () {
        $('.footer-tools').on('click', '.go-top', function (e) {
            App.scrollTo();
            e.preventDefault();
        });
    };
	/*-----------------------------------------------------------------------------------*/
	/*	Popovers
	/*-----------------------------------------------------------------------------------*/
	var handlePopovers = function () {
		//Default (Right)
		$('.pop').popover();
		//Bottom 
		$('.pop-bottom').popover({
			placement : 'bottom'
		});
		//Left 
		$('.pop-left').popover({
			placement : 'left'
		});
		//Top 
		$('.pop-top').popover({
			placement : 'top'
		});
		//Trigger hover 
		$('.pop-hover').popover({
			container: 'body',
			html: true,
			trigger: 'hover'
		});
	};
	/*-----------------------------------------------------------------------------------*/
	/*	Homepage tooltips
	/*-----------------------------------------------------------------------------------*/
	var handleHomePageTooltips = function () {
		//On Hover
		//Default tooltip (Top)
		$('.tip').tooltip();
		//Bottom tooltip
		$('.tip-bottom').tooltip({
			placement : 'bottom'
		});
		//Left tooltip
		$('.tip-left').tooltip({
			placement : 'left'
		});
		//Right tooltip
		$('.tip-right').tooltip({
			placement : 'right'
		});
		//On Focus
		//Default tooltip (Top)
		$('.tip-focus').tooltip({
			trigger: 'focus'
		});
	};
	//thanhuy.nguyen ADD START
	var handleKeepDropdownMenuClick = function(){
		$("ul.dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
	        e.stopPropagation();
	    });
	};
	//thanhuy.nguyen ADD END
	return {

        //Initialise theme pages
        init: function () {
    		
            if (App.isPage("index")) {
                checkLayout();	//Function to check if mini menu/fixed header is activated
    			handleSidebar(); //Function to display the sidebar
    			handleSidebarCollapse(); //Function to hide or show sidebar
    			handleSidebarAndContentHeight();  //Function to hide sidebar and main content height
    			responsiveSidebar();		//Function to handle sidebar responsively
    			handleTree();
    			handleNavbarFixedTop();		//Function to check & handle if navbar is fixed top
    			handleGoToTop();
    			handlePopovers(); //Function to handle popovers
    			handleHomePageTooltips(); //Function to handle tooltips
    			//thanhuy.nguyen ADD START
    			handleKeepDropdownMenuClick();
    			//thanhuy.nguyen ADD END

    			jQxSplitterUtil.init();

    			TreeCache.initTreeCache();
    			
    			// debug code start
//    			App.setCollapsed(false);
//    			jQxSplitterUtil.expand();
    			// debug code end
    			
//    			TreeUtils.bindEventSearchTree();
//    			
//    			TreeCache.initSessionCacheStatusNode();
//        		if(TreeCache.isTreeCollapse()) {
//    				App.setCollapsed(true);
//    				jQxSplitterUtil.collapse();
//            	} else {
//            		App.setCollapsed(false);
//    				jQxSplitterUtil.expand();
//            	}

        		/* bind event for sound */
        		/*AlarmSoundUtil.bindEventForSound();
        		AlarmSoundUtil.initSession();*/
            } 
        },

        //Set page
        setPage: function (name) {
            currentPage = name;
        },

        isPage: function (name) {
            return currentPage == name ? true : false;
        },
        
		// wrapper function to scroll(focus) to an element
        scrollTo: function (el, offeset) {
            pos = (el && el.size() > 0) ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },
        
        // function to scroll to the top
        scrollTop: function () {
            App.scrollTo();
        },
        
		// wrapper function to  block element(indicate loading)
        blockUI: function (el, loaderOnTop) {
            lastBlockedUI = el;
            jQuery(el).block({
                message: '<img src="./img/loaders/12.gif" align="absmiddle">',
                css: {
                    border: 'none',
                    padding: '2px',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: '#000',
                    opacity: 0.05,
                    cursor: 'wait'
                }
            });
        },

        // wrapper function to  un-block element(finish loading)
        unblockUI: function (el) {
            jQuery(el).unblock({
                onUnblock: function () {
                    jQuery(el).removeAttr("style");
                }
            });
        },
        // Hubspot messenger | add by: xuanluc.le | add date: 02/04/2014
        initHandleMessenger : function(msg) {
        	handleMessenger(msg);
        },
        
        initLiveView : function() {
        	collapsed = false; //sidebar collapsed // Modify by xuanluc.le
        	
        	is_mini_menu = false; //is mini-menu activated
        	handleSidebarCollapse2();
        },
        initRe_Export : function() {
        	collapsed = false; //sidebar collapsed // Modify by xuanluc.le
        	
        	is_mini_menu = false; //is mini-menu activated
        	handleSidebarCollapse2();
        },
        //thanhuy.nguyen ADD START
    	hideNotificationMessage : function(){
//    		console.log("setFlagMessage : false");
    		$('#header-message').removeClass('open-custom');
	    	flagMessage = false;
    	},
    	//thanhuy.nguyen  ADD END

    	setCollapsed : function(status){
    		collapsed = status;
    	},
    	getHeightWindow : function() {
    		return $(window).height();
    	},
    };
}();
(function (a, b) {
    a.fn.admin_tree = function (d) {
        var c = {
            "open-icon": "fa fa-folder-open",
            "close-icon": "fa fa-folder",
            selectable: true,
            "selected-icon": "fa fa-check",
            "unselected-icon": "tree-dot"
        };
        c = a.extend({}, c, d);
        this.each(function () {
            var e = a(this);
            e.html('<div class = "tree-folder" style="display:none;">				<div class="tree-folder-header">					<i class="' + c["close-icon"] + '"></i>					<div class="tree-folder-name"></div>				</div>				<div class="tree-folder-content"></div>				<div class="tree-loader" style="display:none"></div>			</div>			<div class="tree-item" style="display:none;">				' + (c["unselected-icon"] == null ? "" : '<i class="' + c["unselected-icon"] + '"></i>') + '				<div class="tree-item-name"></div>			</div>');
            e.addClass(c.selectable == true ? "tree-selectable" : "tree-unselectable");
            e.tree(c);
        });
        return this;
    };
})(window.jQuery);

/**
 * ****************************************************************************************************
 * 
 * SessionStorageUtil ~ add by xuanluc.le ~ 20141128
 * 
 * ****************************************************************************************************
 */
var SessionStorageUtil = function() {
	
	return {
		isExistSessionByName : function(sName) {
    		if(this.getSessionByName(sName) === null) {
    			return false;
    		}
    		return true;
		},
		getSessionByName : function(sName) {
			return sessionStorage.getItem(sName);
		},
		setSessionByName : function(sName, sValue) {
			sessionStorage.setItem(sName, JSON.stringify(sValue));
		},
		getValueInSessionByName : function(sName) {
			return $.parseJSON(this.getSessionByName(sName));
		},
		initOrGetSession : function(sName, sValue) {
			if(SessionStorageUtil.isExistSessionByName(sName)){
				console.log('Session Storage storage "' + sName + '" exist!');
				var sessionValue = SessionStorageUtil.getValueInSessionByName(sName);
				if(null !== sessionValue) {
					console.log('Get session "' + sName + '" width value: ' + JSON.stringify(sValue) + ' successfull!');
					return sessionValue;
				}
			} else {
				console.log('Session storage "' + sName + '" not exist!');
				SessionStorageUtil.setSessionByName(sName, sValue);
				console.log('Create session storage "' + sName + '" width value: ' + JSON.stringify(sValue) + ' successfull!');
			}
			return null;
		}
		
	};
}();
/**
 * ****************************************************************************************************
 * 
 * jqxsplitter util ~ add by xuanluc.le ~ 19-11-2014
 * 
 * ****************************************************************************************************
 */
var jQxSplitterUtil = function() {
	
	var objSplitter = undefined;
	var idPanelSplitter = 'page-wrapper';
	
	var heightMenu = 50; /* 54 is height of menu top 140 */ 
	
	return {
		getTargetId : function() {
			return $('#' + idPanelSplitter);
		},
		getTargetScrollBarTree : function() {
			return $('#scroll-bar-tree-body');
		},
		setHeightScrollBarTree : function(heigth) {
			//this.getTargetScrollBarTree().height(heigth - 104); /* 104 is size height of scroll horizontal */
			this.getTargetScrollBarTree().animate({height : (heigth - 100)}, 300); 
		},
		init : function() {
			/*var winHeight = window.screen.height;*/
			var winHeight = $(window).height();
//			objSplitter = this.getTargetId().jqxSplitter({ 
//	        	width: '100%', 
//	        	height: '100%', //winHeight - heightMenu, 
//	        	theme : 'metro',
////	        	orientation : 'vertical',
////	        	disabled : false,
////	        	resizable : true,
////	        	splitBarSize : 0.4,
////	        	showSplitBar : true,
//	        	panels: [{ size : 307, min : 50 }, {min : 600} ] 
//	        });
			/* set height tree body */
			this.setHeightScrollBarTree(winHeight);
			
			/* set event for panel splitter */
			/* collapsed */
//			objSplitter.on('collapsed', function(event) {
////			    console.log("collapsed");
//				App.setCollapsed(true);
////				TreeCache.setNodeCollapses(true);
////				TreeCache.updateSessionCacheStatusNode();
//			});
			/* expanded */
//			objSplitter.on('expanded', function(event) {
////			    console.log("expanded");
//				App.setCollapsed(false);
////				TreeCache.setNodeCollapses(false);
////				TreeCache.updateSessionCacheStatusNode();
//			});
		},
		collapse : function() {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter('collapse');
		},
		expand : function() {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter('expand');
		},
		destroy : function() {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter('destroy');
		},
		refresh : function() {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter('refresh');
		},
		render : function() {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter('render');
		},
		resizeHeight : function(height) {
			if(objSplitter === undefined) {return;}
			objSplitter.jqxSplitter({ height: (height - heightMenu)});
		},
		
	};
}();

var TreeCache = function() {
    var treeCollapseStatus = false;
    var treeCollapseSession = "treeCollapseSession";
    var nodeCollapseSession = "nodeCollapseSession";
    
    return {
        setTreeCollapseStatus : function(status) {
            sessionStorage.setItem(treeCollapseSession, status);
        },
        getTreeCollapseStatus : function() {
            var status = sessionStorage.getItem(treeCollapseSession); 
            if(status === "true") {
                status = true;
            } else {
                status = false;
            }
            return status;
        },
        getSidebarCollapse : function() {
            return $("#sidebar-collapse");
        },
        setNodeCollapseSession : function(data) {
            sessionStorage.setItem(nodeCollapseSession, JSON.stringify(data));
        },
        getNodeCollapseSession : function() {
            return $.parseJSON(sessionStorage.getItem(nodeCollapseSession));
        },
        initTreeCache : function() {
            var treeCollapse = TreeCache.getTreeCollapseStatus();
            if(treeCollapse) {
                App.setCollapsed(treeCollapse);
                jQxSplitterUtil.collapse();
            } else {
                App.setCollapsed(treeCollapse);
                jQxSplitterUtil.expand();
            }
            treeCollapseStatus = treeCollapse;
            
            TreeCache.getSidebarCollapse().click(function() {
                if(treeCollapseStatus){
                    treeCollapseStatus = false;
                } else {
                    treeCollapseStatus = true;
                }
                // set session
                TreeCache.setTreeCollapseStatus(treeCollapseStatus);
            });
        },
        
    };
}();

var WebSpeaker = function() {
    var alarmSessionStatus = "alarmSessionStatus";
    
    var urlImgSoundOn = 'resources/img/speaker/speaker-on.png';
    var urlImgSoundOff = 'resources/img/speaker/speaker-off.png';
    var urlImgSoundAlert = 'resources/img/speaker/speaker-alert.gif';
    var speakerStatus = true;
    var hasAlarm = false;
    
    var alarmSummarySoundObj = undefined;
    
    return {
        setHasAlarm : function(status) {
            hasAlarm = status;
        },
        getSoundContainer : function() {
            return $("#web-speaker");
        },
        getAlarmSummarySoundObj : function() {
            return alarmSummarySoundObj;
        },
        setSoundImg : function(status) {
            var targetSoundImg = WebSpeaker.getSoundContainer().find("img");
            var url = "";
            if(status === "on") {
                url = urlImgSoundOn;
            } else if(status === "off") {
                url = urlImgSoundOff;
            } else if(status === "alert") {
                url = urlImgSoundAlert;
            } else {
                console.log("unknown status" + status);
            }
            if(url !== "") {
                targetSoundImg.attr("src", url);
            }
        },
        setSoundImgOn : function() {
            WebSpeaker.setSoundImg("on");
        },
        setSoundImgOff : function() {
            WebSpeaker.setSoundImg("off");
        },
        setSoundImgAlert : function() {
            WebSpeaker.setSoundImg("alert");
        },
        setSoundStatus : function(status) {
            sessionStorage.setItem(alarmSessionStatus, status);
        },
        getSoundStatus : function() {
            var status = sessionStorage.getItem(alarmSessionStatus); 
            if(status === "false") {
                status = false;
            } else {
                status = true;
            }
            return status;
        },
        initSound : function() {
            var soundStatus = WebSpeaker.getSoundStatus();
            if(!soundStatus) {
                WebSpeaker.setSoundImgOff();
            }
            speakerStatus = soundStatus;
            WebSpeaker.getSoundContainer().click(function() {
                if(speakerStatus) {
                    WebSpeaker.setSoundImgOff();
                    WebSpeaker.stopAlarmSummarySound();
                    speakerStatus = false;
                } else {
                    if(hasAlarm) {
                        WebSpeaker.setSoundImgAlert();
                        WebSpeaker.playAlarmSummarySound();
                    } else {
                        WebSpeaker.setSoundImgOn();
                    }
                    speakerStatus = true;
                }
                // set session
                WebSpeaker.setSoundStatus(speakerStatus);
//                WebSpeaker.initAlarmSummarySound();
            });
        },
        playAlarmSummarySound : function() {
//            WebSpeaker.getAlarmSummarySound().play();
            alarmSummarySoundObj.play();
        },
        stopAlarmSummarySound : function() {
//            WebSpeaker.getAlarmSummarySound().pause();
            alarmSummarySoundObj.pause();
        },
        initAlarmSummarySound : function() {
            if(alarmSummarySoundObj !== undefined) {
                alarmSummarySoundObj.pause();
            }
            alarmSummarySoundObj = new Audio("resources/sound/alarm_summary.mp3");
            alarmSummarySoundObj.addEventListener('ended', function () {
                console.log("end sound");
                WebSpeaker.initAlarmSummarySound();
                alarmSummarySoundObj.play();
            }, false);
        },
        updateAlarmSummaryNotification : function(hasAlarmStatus) {
            if(alarmSummarySoundObj === undefined) {
                WebSpeaker.initAlarmSummarySound();
            }
            hasAlarm = hasAlarmStatus;
            if(hasAlarm) {
                if(speakerStatus) {
                    WebSpeaker.setSoundImgAlert();
                    WebSpeaker.playAlarmSummarySound();
                }
            } else {
                if(speakerStatus) {
                    WebSpeaker.setSoundImgOn();
                }
                WebSpeaker.stopAlarmSummarySound();
            }
        }
    };
}();
/**
 * ****************************************************************************************************
 * 
 * jQuery(document) resize ~ add by xuanluc.le ~ 20141127
 * 
 * ****************************************************************************************************
 */
jQuery(window).resize(function() {
	var height = App.getHeightWindow();
	jQxSplitterUtil.resizeHeight(height);
	jQxSplitterUtil.setHeightScrollBarTree(height);
});
/**
 * ****************************************************************************************************
 * 
 * jQuery(window) load ~ add by xuanluc.le ~ 20141127
 * 
 * ****************************************************************************************************
 */
jQuery(window).load(function() {
	EMSDesktopNoty.askPermissionForNotification();
	EMSDesktopNoty.handleCheckBrowserActive();
});