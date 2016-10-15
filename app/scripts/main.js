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

	/* Mask Inputs */
	$('#faq-phone').mask('+38 (999) 999-99-99');
	$('#contact-phone').mask('+38 (999) 999-99-99');
	$('#call-us-phone').mask('+38 (999) 999-99-99');

	/*Magnific Popup*/
	$('.open-popup-link').magnificPopup({
		type:'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	//E-mail Ajax Send
	$('#map-form, #form-consult').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php', //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.close();
			swal('Спасибо!', 'Мы свяжемся с Вами', 'success');
			setTimeout(function() {
				// Done Functions
				th.trigger('reset');
			}, 1000);
		});
		return false;
	});

	$('#call-us-form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php', //Change
			data: th.serialize()
		}).done(function() {
			th.trigger('reset');
			$.magnificPopup.close();
			swal('Спасибо!', 'Мы свяжемся с Вами', 'success');
			setTimeout(function() {
				// Done Functions
			}, 1000);
		});
		return false;
	});

	/* Preloader */
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3300);

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

