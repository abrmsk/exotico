jQuery(function($){
	"use strict";

	// Responsive menu
	if($('.fa-bars').length){
		$('.fa-bars').on('click', function(){
			$('.header_top .inner_header nav > ul').show();
			$(this).hide();
			$('.header_top .inner_header .fa-times').show();
		});
		$('.fa-times').on('click', function(){
			$('.header_top .inner_header nav > ul').hide();
			$(this).hide();
			$('.header_top .inner_header .fa-bars').show();
		});
	}

	// %78%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	// Mobile navigation
	if($('.fa-ellipsis-h').length){
		$('.fa-ellipsis-h').on('click', function(){
			$('nav.mobile_navigation').show("slow");
			$(this).hide();
			$('.mobile_nav_buttons .fa-times-circle').show();
		});
		$('.fa-times-circle').on('click', function(){
			$('nav.mobile_navigation').hide("slow");
			$('nav.mobile_navigation > ul .sub_menu_mobile_nav').hide("slow");
			$(this).hide();
			$('.mobile_nav_buttons .fa-ellipsis-h').show();
		});
	};

	// ==================== 
	$('nav.mobile_navigation a.sub_menu_click').on('click', function(){
		$('nav.mobile_navigation > ul .sub_menu_mobile_nav').show("slow");
	});

	$(function(){
	  $(document).click(function(event) {
	    if ($(event.target).closest("a.sub_menu_click").length) return;
	    $(".sub_menu_mobile_nav").hide("slow");
	    // $("nav.mobile_navigation").hide("slow");
	    event.stopPropagation();
	  });
	});
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


	// Header Slider
	if($('.home_slider').length){
		$('.home_slider').slick({
			vertical:true,
			arrows:false,
			dots:true,
		});
	};

	//Carusel slider for shop item
	if($('.shop_carusel').length){
		$('.shop_carusel').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $('.shop_slider_navigation'),
			prevArrow: '<div class="left"><i class="fas fa-arrow-left"></i></div>',
			nextArrow: '<div class="right"><i class="fas fa-arrow-right"></i></div>',
			responsive: [
			{
				breakpoint: 769, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 415, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
			]
		});
	};

	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Testimonials slide %%%%%%%%%%%%%%%%%%%%%%%%%
	if($('.testimonials_carousel').length){
		$('.testimonials_carousel').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.testimonials_slider_box'),
			prevArrow: '<div class="left_arrow"><div class="left"><i class="fas fa-arrow-left"></i></div></div>',
			nextArrow: '<div class="right_arrow"><div class="right"><i class="fas fa-arrow-right"></i></div></div>',
			responsive: [
				{
					breakpoint: 769, 
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 415, 
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};
	// testimonials chage testimonial descriptio
	$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var tabs_container = $('.testimonials_tab_container');

		console.log(nextSlide);
		
		tabs_container.find($('.tab_item')).hide();
		tabs_container.find($('.tab-' + nextSlide)).show();
	});
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	//Twiter slider for shop item
	if($('.twit_box').length){
		$('.twit_box').slick({
			infinite: true,
			vertical: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: $('.twit_slider .arrows'),
			prevArrow: '<div class="up"><i class="fas fa-arrow-up"></i></div>',
			nextArrow: '<div class="down"><i class="fas fa-arrow-down"></i></div>'
		});
	};
	
	// 
	if($('.open_video').length){
		$('.open_video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};

	// === testimonial gallery ===================================
	if($('.testy_gallery').length){
		$('.testy_gallery').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
			verticalFit: true
			},
			zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
			}
		});
	};

// if($('.testimonial_gallery').length){
// 	$('.testimonial_gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 		enabled: true,
// 		navigateByImgClick: true,
// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 		titleSrc: function(item) {
// 		  return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 		}
// 		}
// 		});
// };

});