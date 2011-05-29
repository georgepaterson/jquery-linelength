/*!
 * jQuery Line Length plugin 1.0.0
 *
 * Copyright 2011, George Paterson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function($) {
	$.fn.linelength = function(options) {
		if (options) {
			settings = $.extend({}, $.fn.linelength.defaults, options);
		}
		else {
			settings = $.fn.linelength.defaults;
		}
		return this.each(function(index, element){
			while ($(this).height() > settings.setHeight) {
				var contentWidth = $(this).width();
				contentWidth = contentWidth + 1;
				$(this).width(contentWidth);
				if (contentWidth >= settings.setWidth) {
					break;
				}
			}		
		});
	};
	$.fn.linelength.defaults = {
		setHeight: 24,
		setWidth: 200
	};
})(jQuery);