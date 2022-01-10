(function ($) {
	$.fn.blink = function (options) {
		var defaults = { delay: 500 };
		var options = $.extend(defaults, options);
		var complete = options["complete"];
		return $(this).each(function (idx, itm) {
			var invervalId = setInterval(function () {
				if ($(itm).css("visibility") === "visible") {
					$(itm).css('visibility', 'hidden');
				}
				else {
					$(itm).css('visibility', 'visible');
				}
			}, options.delay);
			if(complete != undefined) {
			    setTimeout(function () {
			        $(itm).css('visibility', 'visible');
			        clearInterval(invervalId);
	            }, complete);
			}
		});
	}
} (jQuery))