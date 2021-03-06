// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
		$('a.page-scroll').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top
				}, 1200, 'easeInOutExpo');
				event.preventDefault();
		});
});

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement;
	header = document.querySelector( '.navbar-default' );
	arrow1 = document.querySelector( '.arrow' );
	didScroll = false,
	changeHeaderOn = 550;
	arrow1.style.opacity = 0.9;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.classList.add('navbar-shrink');
		}
		else {
			header.classList.remove('navbar-shrink');
		};
		arrow1.style.opacity = 1 - sy / 100 ;

		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}



	init();

})();
