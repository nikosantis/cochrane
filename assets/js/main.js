$('body').scrollspy({ target: '#navbarHome' });
//
// Sticky Navbar
//

var NavbarSticky = (function() {

	// Variables

	var $nav = $('.navbar-sticky'),
        navOffsetTop = 0,
		scrolling = false;


	// Methods

	function init($this) {

		// our current vertical position from the top
		var scrollTop = $(window).scrollTop(),
			navHeight = $this.outerHeight();

		if (scrollTop > (navOffsetTop + 200)) {
			$this.addClass('sticky');
			$("body").css("padding-top", navHeight + "px");
		} else {
			$this.removeClass('sticky');
			$("body").css("padding-top", "0");
		}
	}


	// Events

	if ($nav.length) {

		navOffsetTop = $nav.offset().top;
		
		$(window).on({
			'scroll': function() {
				scrolling = true;

				setInterval(function() {
					if (scrolling) {
						scrolling = false;

						// Sticky navbar init
                        init($nav);
					}
				}, 250);
			}
		})
	}
})();

$('.carousel-home').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
});
$('.carousel-promo').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
});