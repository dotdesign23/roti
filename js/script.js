$(document).ready(function () {
	$('.menu-carousel').slick({
		slidesToShow: 2,
		centerMode: true,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
	});
	
	function reveal() {
		const reveals = $(".reveal");
		
		reveals.each(function() {
			const windowHeight = window.innerHeight;
			const elementTop = $(this).get(0).getBoundingClientRect().top;
			const elementVisible = 500;

			if (elementTop < windowHeight - elementVisible) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	}

	$(window).on('scroll', reveal)
	reveal();
})