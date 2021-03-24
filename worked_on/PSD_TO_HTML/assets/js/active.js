;(function ($) {

    "use strict";
    
        /* ---------------------------------------------
        Testimonial Carousel
        --------------------------------------------- */
        $(".active-product-slider").owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 4,
                }
            }
        });


        /* ---------------------------------------------
        Related Products:
        --------------------------------------------- */
        $(".related-product-slider").owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 4,
                }
            }
        });


        /* ---------------------------------------------
        Hero Slider
        --------------------------------------------- */ 
        var $activeSlider = $(".hero-area");
        $activeSlider.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1500,
        });
        $activeSlider.on("translate.owl.carousel", function () {
            $(".hero-area .hero-text h1").removeClass("fadeInUp animated").hide();
        });          
        $activeSlider.on("translated.owl.carousel", function () {
            $(".hero-area .hero-text h1").addClass("fadeInUp animated").show();
        });	

        /* ---------------------------------------------
        window When Loading
        --------------------------------------------- */
        var $window = $(window);
        $window.on("load",function (){
            // Preloader
            $("#preloader-active").fadeOut(500);
        });
    


})(jQuery);