var AjaxUtils = function() {
    
    var HTTP_GET = "GET";
    var HTTP_POST = "POST";
    var HTTP_PUT = "PUT";
    var HTTP_DELETE = "DELETE";
    var DATA_TYPE = 'json';
    var CONTENT_TYPE = "application/x-www-form-urlencoded; charset=UTF-8";
    var LOADING_TIMEOUT = 500;
    
    var defaultOptions = {
            dataType : DATA_TYPE,
            contentType : CONTENT_TYPE,
            cache : false,
            error : function(xhr, textStatus, errorThrown) {
                if (xhr.status == 901) {
                    DialogUtil.alertResultError("Your session is expired. Please re-login!", function() {
                        window.location.href = EmsUtil.getCurrentUrl() + "login";
                    });
                }
            },
            complete : function(xhr) {
//                var startTime = xhr.startTime;
//                if(startTime != undefined) {
//                    var elapsed = new Date().getTime() - startTime;
//                    console.log("elapsed " + elapsed);
//                    if (elapsed < LOADING_TIMEOUT) {
//                        setTimeout(function() {
//                            AjaxLoadingUtil.unblockUI();
//                        }, LOADING_TIMEOUT - elapsed);
//                    } else {
//                        AjaxLoadingUtil.unblockUI();
//                    }
//                }
            },
        };
    
    return {
        addAjaxProperty : function(ajaxObj, propertyName, propertyValue) {
            if (propertyValue != '') {
                ajaxObj[propertyName] = propertyValue;
            }
            return ajaxObj;
        },
        getSimpleAjaxObj : function(type, url, onsuccess, options) {
            // var ajaxObj = JSON.parse(JSON.stringify(simpleAjaxObj));
            var ajaxObj = $.extend({}, defaultOptions, options);
            this.addAjaxProperty(ajaxObj, "type", type);
            this.addAjaxProperty(ajaxObj, "url", url);
            // addAjaxProperty(ajaxObj, "data", data);
            this.addAjaxProperty(ajaxObj, "success", onsuccess);
            return ajaxObj;
        },
        doGet : function(url, onsuccess, options) {
            var ajaxObj = this.getSimpleAjaxObj(HTTP_GET, url, onsuccess, options);
            return $.ajax(ajaxObj);
        },
        doPost : function(url, onsuccess, options) {
            var ajaxObj = this.getSimpleAjaxObj(HTTP_POST, url, onsuccess, options);
            return $.ajax(ajaxObj);
        },
        doPut : function(url, onsuccess, options) {
            var ajaxObj = this.getSimpleAjaxObj(HTTP_PUT, url, onsuccess, options);
            return $.ajax(ajaxObj);
        },
        doDelete : function(url, onsuccess, options) {
            var ajaxObj = this.getSimpleAjaxObj(HTTP_DELETE, url, onsuccess, options);
            return $.ajax(ajaxObj);
        },
        blockUIBeforeSendDefault : function() {
            return {
                beforeSend : function() {
                    AjaxLoadingUtil.blockUI();
                },
            };
        },
        blockUICompleteDefault : function() {
            return {
                complete : function() {
                    AjaxLoadingUtil.unblockUI();
                },
            };
        },
        blockUIAjaxDefault : function() {
            return $.extend(this.blockUIBeforeSendDefault(), this.blockUICompleteDefault());
        },
        blockUIBeforeSend : function() {
            return {
                beforeSend : function(xhr) {
                    xhr.startTime = new Date().getTime();
//                        console.log("start time " + xhr.startTime);
                    AjaxLoadingUtil.blockUI();
                },
            };
        },
        getRemainingTime : function(startTime, totalTime) {
            var elapsed = new Date().getTime() - startTime;
            if(elapsed < totalTime) {
                return totalTime - elapsed;
            } else {
                return 0;
            }
        },
        blockUIComplete : function(isUnBlockOnComplete) {
            return {
                complete : function(xhr) {
                    if(isUnBlockOnComplete == true) {
                        var startTime = xhr.startTime;
                        if (startTime != undefined) {
                            var remainingTime = AjaxUtils.getRemainingTime(startTime, LOADING_TIMEOUT);
                            setTimeout(function() {
                                AjaxLoadingUtil.unblockUI();
                            }, remainingTime);
                        }
                    }
                },
            };
        },
        blockUIAjax : function() {
            return $.extend(this.blockUIBeforeSend(), this.blockUIComplete(true));
        },
        blockUIAjaxNew : function(isUnBlockOnComplete) {
            return $.extend(this.blockUIBeforeSend(), this.blockUIComplete(isUnBlockOnComplete));
        },
        getLoadingTimeout : function(){
            return LOADING_TIMEOUT;
        }
    };
}();