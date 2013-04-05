/**
* equalise: A jQuery plugin for that equalises the height of html elements
* Author: Edward Casbon
* Email: edward@edwardcasbon.co.uk
* URL: http://www.edwardcasbon.co.uk
* Version: 1.0
* Date: 5th April 2013
*
* Example usage:
* $(".columns").equalise(); 
*
* Note that to equalise different sets of columns you'll need to call equalise multiple times. For example:
* $(".columnGroup1").equalise();
* $(".columnGroup2").equalise();
*
**/
(function($) {
	$.fn.equalise = function() {

		var $height = 0;

		this.each(function(){
			var $element 		= $(this),
				$outerHeight 	= $element.outerHeight();
			if($outerHeight > $height) $height = $outerHeight;
		});
		
		return this.each(function(){
			var $element = $(this);
			$element.height(
				$height - 
				$element.css("paddingTop").replace(/[^-\d\.]/g, '') - 
				$element.css("paddingBottom").replace(/[^-\d\.]/g, '')
			);
		});
	};
})(jQuery);