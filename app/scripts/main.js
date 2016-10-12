/* Slider */
$(window).on('load', function() {
	/*$('#slider').nivoSlider({
		directionNav: false,
		pauseOnHover: false
	});*/
});

/*----------------------------------*/
/* Mobile menu */
jQuery(document).ready(function($) {

	var $hamburger = $('.hamburger');

	$hamburger.on('click', function(e) {
		$hamburger.toggleClass('is-active');
    // Do something else, like open/close menu
    $('.menu').slideToggle('500');
    $('.mob-menu-btn, .menu').toggleClass('fixed');

    setTimeout(function() {
    	$('.scroll-top').toggleClass('hide-block');
    }, 200);
  });
	/*--------------------------------------------*/
	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.menu a').removeClass('mob-menu');
			$('.menu').show().addClass('cl-effect-14');
			$('.mob-menu-btn, .menu').removeClass('fixed');
			$hamburger.removeClass('is-active');
		} 
		else {
			$('.menu').hide().removeClass('cl-effect-14');
			$hamburger.removeClass('is-active');
			$('.menu a').addClass('mob-menu');
		};
	});

	if ($(window).width() < 992) {
		$('.menu a').addClass('mob-menu');
		//$('.menu').addClass('fixed');
		$('.menu').removeClass('cl-effect-14');
	};

	$('body').on('click', '.mob-menu', function() {
		$('.menu').slideUp(500);
		$hamburger.toggleClass('is-active');
		$('.mob-menu-btn, .menu').removeClass('fixed');

		setTimeout(function() {
			$('.scroll-top').removeClass('hide-block');
		}, 200);
	});

	/* Smooth Scrolling
	------------------------------------------------------ */

	$('.menu a').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});

	/* Scroll top */
	$('.scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});

	/* Hide scroll button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});

	/* Preloader */
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

	/* Mask Inputs */
	$("#faq-phone").mask("+38 (999) 999-99-99");
	$("#contact-phone").mask("+38 (999) 999-99-99");

}); /* End Document(ready) */

/* Google Map*/
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.501868, lng: 30.498139},
		zoom: 17,
		scrollwheel: false
	});
};

