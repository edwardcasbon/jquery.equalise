/**
* equalise: A jQuery plugin for that equalises the height of html elements
* Author: Edward Casbon
* Email: edward@edwardcasbon.co.uk
* URL: http://www.edwardcasbon.co.uk
* Version: 2.0
* Date: 24th September 2014
*
* Example usage:
* $(".column-container").equalise();
*
*
**/
(function($) {
	$.fn.equalise = function(options) {

		// Default settings.
		var settings = {
			itemClass: "equalise-item"
		};

		// Overide with custom settings.
		$.extend(settings, options);

		// Loop through the elements.
		return this.each(function(){
			var $this = $(this),
				height = 0,
				items = $this.find("." + settings.itemClass);

			// Loop through the items, working out the largest height.
			for(var i=0; i<items.length; i++) {
				var $item = $(items[i]),
					itemHeight = $item.outerHeight();

				height = (itemHeight > height) ? itemHeight : height;
			}

			// Loop through the items setting the heights.
			for(var i=0; i<items.length; i++) {
				var $item = $(items[i]);
				$item.height(
					height -
					$item.css("paddingTop").replace(/[^-\d\.]/g, '') -
					$item.css("paddingBottom").replace(/[^-\d\.]/g, '')
				);
			}

		});
	};
})(jQuery);