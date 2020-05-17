$(document).ready(function () {
	$(".content__feature_box_slide_banner").slick({
		arrows: false,
		dots: false,
		infinite: false,
		autoplay: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$(".study__program_reviews_list_slide").slick({
		infinite: true,
		dots:false,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 5000,
		centerMode: true,
		centerPadding: '10px',
		arrows: false,
		mobileFirst:true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 319,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	$(".study__program_related_list_slide").slick({
		arrows: false,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerPadding: "40px",
		padding: "40px",
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
					dots: false,
					centerPadding: "40px",
					padding: "40px",
					centerMode: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
					centerPadding: "40px"
				}
			},
			{
				breakpoint: 480,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
					centerPadding: "40px"
				}
			}

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$(".study__program_about_list_slide").slick({
		arrows: false,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerPadding: "40px",
		padding: "40px",
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					dots: false,
					centerPadding: "40px",
					padding: "40px",
					centerMode: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
					centerPadding: "40px"
				}
			},
			{
				breakpoint: 480,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
					centerPadding: "40px"
				}
			}

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$(".study__program_slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false
	});

	$(".study__program_tabs-items").click(function (index) {
		$(".study__program_tabs-items").removeClass("active");
		$(this).toggleClass("active");
		$(".study__program_slider").slick("slickGoTo", $(this).index(), false);
	});

});

