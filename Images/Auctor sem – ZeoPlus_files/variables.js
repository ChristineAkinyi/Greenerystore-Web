		"use strict";
		var plantmore_brandnumber = 6,
			plantmore_brandscrollnumber = 2,
			plantmore_brandpause = 3000,
			plantmore_brandanimate = 2000;
		var plantmore_brandscroll = false;
							plantmore_brandscroll = true;
					var plantmore_categoriesnumber = 6,
			plantmore_categoriesscrollnumber = 2,
			plantmore_categoriespause = 3000,
			plantmore_categoriesanimate = 700;
		var plantmore_categoriesscroll = 'false';
					var plantmore_blogpause = 3000,
			plantmore_bloganimate = 2000;
		var plantmore_blogscroll = false;
							plantmore_blogscroll = false;
					var plantmore_testipause = 3000,
			plantmore_testianimate = 2000;
		var plantmore_testiscroll = false;
							plantmore_testiscroll = false;
					var plantmore_catenumber = 6,
			plantmore_catescrollnumber = 2,
			plantmore_catepause = 3000,
			plantmore_cateanimate = 700;
		var plantmore_catescroll = false;
					var plantmore_menu_number = 9;
		var plantmore_sticky_header = false;
							plantmore_sticky_header = true;
					jQuery(document).ready(function(){
			jQuery("#ws").on('focus', function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("");
				}
			});
			jQuery("#ws").on('focusout', function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("");
				}
			});
			jQuery("#wsearchsubmit").on('click', function(){
				if(jQuery("#ws").val()=="" || jQuery("#ws").val()==""){
					jQuery("#ws").focus();
					return false;
				}
			});
			jQuery("#search_input").on('focus', function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("");
				}
			});
			jQuery("#search_input").on('focusout', function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("");
				}
			});
			jQuery("#blogsearchsubmit").on('click', function(){
				if(jQuery("#search_input").val()=="" || jQuery("#search_input").val()==""){
					jQuery("#search_input").focus();
					return false;
				}
			});
		});
		