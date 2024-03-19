"use strict";
// product-magnifier var
var plantmore_magnifier_vars;

var yith_magnifier_options = {
	showTitle: false,
	zoomWidth: plantmore_magnifier_vars.zoomWidth,
	zoomHeight: plantmore_magnifier_vars.zoomHeight,
	position: plantmore_magnifier_vars.position,
	lensOpacity: plantmore_magnifier_vars.lensOpacity,
	softFocus: plantmore_magnifier_vars.softFocus,
	adjustY: 0,
	disableRightClick: false,
	phoneBehavior: plantmore_magnifier_vars.phoneBehavior,
	loadingLabel: plantmore_magnifier_vars.loadingLabel,
}
var sliderOptions = {
		responsive: plantmore_magnifier_vars.responsive,
		circular: plantmore_magnifier_vars.circular,
		infinite: plantmore_magnifier_vars.infinite,
		direction: 'left',
		debug: false,
		auto: false,
		align: 'left', 
		prev    : {
			button  : "#slider-prev",
			key     : "left"
		},
		next    : {
			button  : "#slider-next",
			key     : "right"
		},
		scroll : {
			items     : 1,
			pauseOnHover: true
		},
		items   : {
			visible: Number(plantmore_magnifier_vars.visible),
		},
		swipe : {
			onTouch:    true,
			onMouse:    true
		},
		mousewheel : {
			items: 1
		}
	};
		
jQuery('ul.yith_magnifier_gallery').carouFredSel(sliderOptions);