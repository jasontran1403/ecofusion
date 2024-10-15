(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function() {
        var Body = $('body');
        Body.addClass('preloader-site');
    });

    $(window).on('load', function() {
        setTimeout(() => { // Use setTimeout here
            $('.preloader-wrapper').fadeOut();
            $('body').removeClass('preloader-site');
        }, 1000); // Delay of 1500 milliseconds (1.5 seconds)
    });
};



  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 3, // Show 3 logos at a time
      spaceBetween: 30,
      speed: 2000,
      loop: true, // Enable loop
      autoplay: {
          delay: 1500, // Time in milliseconds between slides
          disableOnInteraction: false, // Keep autoplay running after user interactions
      },
      breakpoints: {
          0: {
              slidesPerView: 1, // Show 1 logo on very small screens
          },
          576: {
              slidesPerView: 2, // Show 2 logos on small screens
          },
          768: {
              slidesPerView: 2, // Show 3 logos on medium screens
          },
          992: {
              slidesPerView: 3, // Show 4 logos on large screens
          },
          1500: {
              slidesPerView: 4, // Show 6 logos on extra large screens
          },
      },
  });
  
    

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);

window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  
  console.log(header);
  if (window.scrollY > 50) {
      header.classList.remove('transparent');
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
  }
});