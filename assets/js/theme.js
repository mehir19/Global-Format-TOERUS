/*
Theme Name: Mrittik Architecture Theme
Version: 1.0
Author: WPThemeBooster
Author URI: 
Description: Mrittik is a Modern Architecture Theme
*/
/*	IE 10 Fix*/

(function ($) {
	'use strict';

    

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	
	jQuery(document).ready(function () {
    
        // Menu 5 plugin 
        ma5menu({
			menu: '.main_menu',
			activeClass: 'current',
			// footer: '.slide_navi',
			position: 'right',
			closeOnBodyClick: true
		});


        // Toggle Header Search
        $('.header_search .form-control-submit').click(function(e) { 
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("sticky");
            } else {
                header.removeClass("sticky");
            }
        });


        new Swiper('.swiper_one', {
            autoHeight: true,
            slidesPerView: 3,
            effect: 'slide',
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 1000,
            },

            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });


    });      
})(jQuery);

// Hide header on scroll down
const nav = document.querySelector(".header");
const scrollUp = "top-up";
let lastScroll = 800;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 800) {
        nav.classList.remove(scrollUp);
        return;
    }
    
    if (currentScroll > lastScroll) {
        // down
        nav.classList.add(scrollUp);
    } else if (currentScroll < lastScroll) {
        // up
        nav.classList.remove(scrollUp);
    }
    lastScroll = currentScroll;
});