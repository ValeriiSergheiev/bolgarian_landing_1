/* Slider */
$(window).on('load', function() {
	$('#slider').nivoSlider({
		directionNav: false,
		pauseOnHover: false
	});
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

	/* Magnific image */
	$('.apartament-item a, .house-plan-item a').magnificPopup({
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
			duration: 300, // don't foget to change the duration also in CSS
			easing: 'ease-in-out'
		}
	});

	$('.house-plan-item a').magnificPopup({
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
			duration: 300, // don't foget to change the duration also in CSS
			easing: 'ease-in-out'
		},
		gallery: {
			enabled: true
		}
	});

	$('.flat-gallery-item a').magnificPopup({
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
			duration: 300, // don't foget to change the duration also in CSS
			easing: 'ease-in-out'
		},
		gallery: {
			enabled: true
		}
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

	//Bottstrap tabs
	$('#flat-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	//Parallax
	$('.entry').parallax({imageSrc: '../images/testimonials.jpg'});
	$('.faq').parallax({imageSrc: '../images/call-centre.jpg'});

}); /* End Document(ready) */

/* Google Map*/
var map;
function initMap() {
	var myLatLng = {lat: 50.466930, lng: 30.351763};
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 15,
		center: myLatLng,
		scrollwheel: false
	});

	var image = '../images/marker.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image,
		title: 'Болгарский коттедж!'
	});
};
