var ERROR_01 = "Invalid username or password!";
var ERROR_02 = "Wrong captcha!";

function getTxtUsername() {
    return $("#username");
}
function getTxtPassword() {
    return $('#password');
}
function getChkIsRemember() {
    return $('#chkIsRemember');
}
//thanhuy.nguyen ADD START
function getBtnSubmit() {
    return $('#btnSubmit');
}
//thanhuy.nguyen ADD END
function getTxtBrowserInfo() {
    return $("#txtBrowserInfo");
}

$(document).ready(function() {
    
    // update base url on server
//    doGet("basic/base-url", function(url) {
//        console.log("base url " + url);
//    }, {});
    
    var txtUsername = getTxtUsername();
    var txtPassword = getTxtPassword();
    
    var btnSubmit = getBtnSubmit();
    var userCookie = $.cookie("user_cookie");
    
    txtUsername.keypress(function(e) {
        if(e.keyCode == 13) {
            btnSubmit.click();
        }
    });
    
    txtPassword.keypress(function(e) {
        if(e.keyCode == 13) {
            btnSubmit.click();
        }
    });
    
    if(userCookie != undefined) {
        var user = jQuery.parseJSON(userCookie);
        var username = user.user_cookie_username;
        var password = user.user_cookie_password;
        
        txtUsername.val(username);
        txtPassword.val(password);
        
        getChkIsRemember().attr('checked', false);
        btnSubmit.text("Signing in...");
    	btnSubmit.attr("disabled", true);
    	
    	var txtBrowserInfo = getTxtBrowserInfo();
        var browserInfo = getInformationBrowser();
    	getPublicIp().done(function(data) {
            browserInfo["publicIp"] = data["ip"];
            txtBrowserInfo.val(JSON.stringify(browserInfo));
            
            $("#frmLogin").append($('<input />').attr('type', 'hidden')
                    .attr('name', 'isSubmitFromCookie')
                    .attr('value', 'true')).submit();
    	});
    	
    } else {
        $("#page").show();
        txtUsername.focus();
        var captchaDiv = $("#captcha-div");
    
        var error = getUrlVars()["error"];
    
        if (error != undefined) {
            var errorMsg = "";
            if (error == "1") {
                errorMsg = ERROR_01;
            } else if (error == "2") {
                errorMsg = ERROR_02;
                refreshCaptcha();
            } else if (error == "3") {
                // invalid and wrong captcha
                errorMsg = ERROR_01;
                refreshCaptcha();
            }
            if (error != "2" && error != "3") {
                captchaDiv.remove();
            } else {
                captchaDiv.show();
            }
            if (errorMsg != "") {
                errorMsg = "<font color='red'>" + errorMsg + "</font>";
                $("#error").html(errorMsg);
            }
        } else {
            captchaDiv.remove();
        }
    }
});

function refreshCaptcha() {
    $("#image-captcha").hide().attr('src',
            "captcha.jpg" + '?' + Math.floor(Math.random() * 100))
            .fadeIn();
    return false;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(
            window.location.href.indexOf('?') + 1).split('&');
    for ( var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function doLogin() {
    var isSubmit = true;
    var txtUsername = getTxtUsername();
    var txtPassword = getTxtPassword();
    
    var username = txtUsername.val();
    var password = txtPassword.val();
    
    var btnSubmit = getBtnSubmit();
    
    var txtBrowserInfo = getTxtBrowserInfo();
    var browserInfo = getInformationBrowser();
    
    getPublicIp().done(function(data) {
        browserInfo["publicIp"] = data["ip"];
        txtBrowserInfo.val(JSON.stringify(browserInfo));
        
        if (username.length == 0) {
            isSubmit = false;
            $("#un-error-span").html("This field is required.");
            $("#fg-un").removeClass('has-success').addClass('has-error');
            txtUsername.focus();
        } else {
            $("#un-error-span").html("");
            $("#fg-un").removeClass('has-error').addClass('has-success');
        }
        
        if(password.length == 0) {
            $("#pw-error-span").html("This field is required.");
            $("#fg-pw").removeClass('has-success').addClass('has-error');
            if(isSubmit) {
                password.focus();
            }
            isSubmit = false;
        } else {
            $("#pw-error-span").html("");
            $("#fg-pw").removeClass('has-error').addClass('has-success');
        }
        if(isSubmit){
            btnSubmit.text("Signing in...");
            btnSubmit.attr("disabled", true);
        }
        $("#frmLogin").submit();
    });
}

function getInformationBrowser() {
    var unknown = '-';
    
    // screen
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }
    
    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [
        {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows Vista', r:/Windows NT 6.0/},
        {s:'Windows Server 2003', r:/Windows NT 5.2/},
        {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows 98', r:/(Windows 98|Win98)/},
        {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows CE', r:/Windows CE/},
        {s:'Windows 3.11', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Open BSD', r:/OpenBSD/},
        {s:'Sun OS', r:/SunOS/},
        {s:'Linux', r:/(Linux|X11)/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'QNX', r:/QNX/},
        {s:'UNIX', r:/UNIX/},
        {s:'BeOS', r:/BeOS/},
        {s:'OS/2', r:/OS\/2/},
        {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
//    var flashVersion = 'no check';
//    if (typeof swfobject != 'undefined') {
//        var fv = swfobject.getFlashPlayerVersion();
//        if (fv.major > 0) {
//            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
//        }
//        else  {
//            flashVersion = unknown;
//        }
//    }
    
    var browserInfo = {
            screenSize : screenSize,
            browserName : browser,
            browserVersion : version,
            browserMajorVersion : majorVersion,
            isMobile: mobile,
            osName : os,
            osVersion : osVersion,
            hasCookied : cookieEnabled,
            fullUserAgent : navigator.userAgent
//            flashVersion: flashVersion
        };
    return browserInfo;
}

function getPublicIp() {
    var dfd = jQuery.Deferred();
    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
        dfd.resolve(data);
    }).fail(function() { 
        var data = {};
        dfd.resolve(data);
    });;
    return dfd.promise();
}