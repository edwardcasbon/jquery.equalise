/**
* equalise: A jQuery plugin for that equalises the height of html elements
* Author: Edward Casbon
* Email: edward@edwardcasbon.co.uk
* URL: http://www.edwardcasbon.co.uk
* Version: 2.1
* Date: 15th October 2014
*
* Example usage:
* $(".column-container").equalise({
*   itemClass: "equalise-item",
*   groupAttr: "equalise-group"
* });
*
*
**/
(function($) {
	$.fn.equalise = function(options) {

		// Default settings.
		var settings = {
			itemClass: "equalise-item",
			groupAttr: "equalise-group"
		};

		// Overide with custom settings.
		$.extend(settings, options);

		// Loop through the elements.
		return this.each(function(){
			var $this = $(this),
				items = $this.find("." + settings.itemClass),
				groups = [];

			// Loop through the items, working out the largest height.
			for(var i=0; i<items.length; i++) {
				var $item = $(items[i]),
				itemHeight,
				groupAttr = "data-" + settings.groupAttr,
				group = $item.attr(groupAttr) || "default";

				// Remove any previously set heights.
				$item.height('auto');

				// Get the elements natural height.
				itemHeight = $item.outerHeight();

				// If group not yet added to array, add and set to 0.
				if(!groups[group]) {
					groups[group] = 0;
				};

				// Set the largest height of the group.
				groups[group] = (itemHeight > groups[group]) ? itemHeight : groups[group];
			}

			// Loop through the items setting the heights.
			for(var i=0; i<items.length; i++) {
				var $item = $(items[i]),
					groupAttr = "data-" + settings.groupAttr,
					itemGroup = $item.attr(groupAttr) || "default";

				$item.height(
					groups[itemGroup] -
					$item.css("paddingTop").replace(/[^-\d\.]/g, '') -
					$item.css("paddingBottom").replace(/[^-\d\.]/g, '')
				);
			}
		});
	};
})(jQuery);
