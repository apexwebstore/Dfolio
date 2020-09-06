(function($){
	$(window).on("load", function(){
		$(".preloader").fadeOut();
	});
	$(document).ready(function(){
		// Sticky Navigation Bar
		$(window).scroll(function(){
			var scrollHeight = $(document).scrollTop();
			if(scrollHeight > 50){
				$('.primary-header').addClass('nav-fixed');
			}else{
				$('.primary-header').removeClass('nav-fixed');
			}

			// Scroll to Top
			if(scrollHeight > 200){
				$('.scrolltop').fadeIn();
			}else{
				$('.scrolltop').fadeOut();
			}
		});
		
		$(".scrolltop a").click(function(event){
			$("html").animate({scrollTop:$("body").offset().top}, "1000");
			event.preventDefault();
		});

		// Home Slider
	    $(".home-slider").owlCarousel({
	      items: 1,
	      nav: true,
	      navText : ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
	      dots: false,
	      animateOut: 'fadeOut',
	      animateIn: 'fadeIn',
	      autoplay: false,
	      loop: true,
	      mouseDrag: false,
	      touchDrag: false,
	      smartSpeed: 600
	    });

	    $(".home-slider").on("translate.owl.carousel", function(){
	      $(".slide-content .title h2, .slide-content .description p").removeClass("animated fadeInUp").css("opacity", "0");
	      $(".slide-content .slide-btn a").removeClass("animated fadeInDown").css("opacity", "0");
	      $(".slide-content .subtitle h3").removeClass("animated fadeInDown").css("opacity", "0");
	    });

	    $(".home-slider").on("translated.owl.carousel", function(){
	      $(".slide-content .title h2, .slide-content .description p").addClass("animated fadeInUp").css("opacity", "1");
	      $(".slide-content .slide-btn a").addClass("animated fadeInDown").css("opacity", "1");
	      $(".slide-content .subtitle h3").addClass("animated fadeInDown").css("opacity", "1");
	    });
	    
	    new WOW().init();

	    var mixer = mixitup('.projects-items', {
	        selectors: {
			   control: '.project-nav ul li'
			}
	    });
	    
	});
}(jQuery))