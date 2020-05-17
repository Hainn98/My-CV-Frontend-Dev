$(document).ready(function () {
	// open modal active-advice
	$(document).on('click','.game__qa',function(){
		$('.butu__guide').addClass('open');
		$('.butu__close').click(function(){
			$('.butu__guide').removeClass('open');
		})
    });
    $(".js__active-err").click(function () {
        $("#modal__err").toggleClass("active");
    });
    $(".js__active-advice").click(function () {
        $("#modalCourseAdvice").toggleClass("active");
    });
    $(".close").click(function () {
        $("#modalCourseAdvice").removeClass("active");
    });
    $(".close__modal_err").click(function () {
        $("#modal__err").removeClass("active");
    });
    // Open modal active-acount
    // $(".js__active-acount").click(function () {
    //     $("#js__modal").toggleClass("active");
    // });
    // Open modal active-course-register
    $("#js__active-register").click(function () {
        $("#js__modal_register").toggleClass("active");
    });
    // close modal active-course-register
    $(".modal__close").click(function () {
        $("#js__modal_register").removeClass("active");
    });
    // Close modal active-acount
    $("#js__modal-close").click(function () {
        $("#js__modal").removeClass("active");
    });

    // $("#js__modal").tabs();
    $("#dashboard__tabs").tabs();
    $("#dashboard__tabs2").tabs();
    $("#dashboard__detail__tabs").tabs();
    $("#course-details__tabs").tabs();
    $(".wp__form_wizard").tabs();
    $(".tab__noti").tabs();
    // $("#js__form-tabs").tabs();
    // $(".tab__setting").tabs();
    $(".js__visible-pass").click(function () {
        let input = $(this).parent().find("#js__input-pass")
        console.log($(this).parent().find("#js__input-pass")[0].type);

        input[0].type === "password"
            ? (input[0].type = "text")
            : (input[0].type = "password");

        $(".js__visible-pass")
            .parent()
            .addClass("active");

        if (
            $(this)
                .parent()
                .find(".input__field")
                .val() == ""
        ) {
            $(this)
                .parent()
                .removeClass("active");
        }
    });

    // collapse
    // let collapse = document.getElementsByClassName("section__collapse");
    $(".collapse__header").click(function () {
        $(this)
            .parent()
            .toggleClass("active");
    });
    $(".collapse__view_all").click(function () {
        $(this).parent().toggleClass('active');
    })
    // let collapse = document.getElementsByClassName("section__collapse");
    $(".input__field").focusin(function () {
        $(this)
            .parent()
            .addClass("active");
    });
    $(".input__field").focusout(function () {
        if (
            $(this)
                .parent()
                .find(".input__field")
                .val() == ""
        ) {
            $(this)
                .parent()
                .removeClass("active");
        }
	});

	$(".tab__skill_list li").click(function () {
		$(".tab__skill_list li").removeClass('active')
		$(this).toggleClass('active')
	})

    // $("#js__toggle-psw").click(function () {
    //     $("#js__form-pwd").toggleClass("active");
    //     $("#js__form-tabs").toggleClass("hide");
    // });

    // $("#js__rspwd-back").click(function () {
    //     $("#js__form-pwd").removeClass("active");
    //     $("#js__form-tabs").removeClass("hide");
    // });
    // $("#js__pwd-back").click(function () {
    //     $("#js__form-rspwd").removeClass("active");
    //     $("#js__form-pwd").removeClass("hide");
    //     $("#js__form-pwd").addClass("active");
    // });

    // $("#js__rspwd-next").click(function () {
    //     $("#js__form-pwd").addClass("hide");
    //     $("#js__form-rspwd").addClass("active");
    // });

    $(".box__unit_topic").click(function () {
        $(this).parent().toggleClass('active');
    });

    $(".lesson__title").click(function () {
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .toggleClass("active");
    });

    if ($(window).width() < 768) {
        $(".lesson__item_head").click(function () {
            $(this)
                .parent()
                .toggleClass("active");
        });
    }
    //  else {
    // 	alert('More than 960');
    //  }
    // menu responsive
    // menu responsive
	$(document).ready(function () {
		$(function () {
			$(".icon__menu_respon").click(function () {
				if ($(".widget__menu_respon").hasClass("hidden")) {
					$(".widget__menu_respon").attr("class", "widget__menu_respon visible animated slideInLeft");
					$("html").addClass("hiddenscroll");
				} else {
					$(".widget__menu_respon").attr("class", "widget__menu_respon hidden animated slideOutLeft");
					$(".menu-childen").attr("class", "menu-childen hidden animated slideOutRight");
					$("html").removeClass("hiddenscroll");
				}
				$(this).toggleClass("open");
			});
			$(".js-menu-childen").click(function () {
				if ($(".menu-childen").hasClass("hidden")) {
					$(".menu-childen").attr("class", "menu-childen visible animated slideInRight");
				} else {
					$(".menu-childen").attr("class", "menu-childen hidden animated slideOutRight");
				}
			});

			$(".js-menu-backup").click(function () {
				if ($(".menu-childen").hasClass("hidden")) {
					$(".menu-childen").attr("class", "menu-childen visible animated slideInRight");
				} else {
					$(".menu-childen").attr("class", "menu-childen hidden animated slideOutRight");
				}
			});

			$(document).keyup(function (e) {
				if (e.keyCode == 27) {
					if ($(".widget__menu_respon").hasClass("visible")) {
						$(".icon__menu_respon").toggleClass("open");
					} else {
					}
					$(".widget__menu_respon").attr("class", " widget__menu_respon slideOutLeft hidden");
					$(".menu-childen").attr("class", " menu-childen slideOutLeft hidden");
					$("html").removeClass("hiddenscroll");
				}
			});

		});



		$(window).resize(function () {
			$(".widget__menu_respon").removeClass("active");
			$("#header").removeClass("active");
		});
	});


    // menu account header login

    $(document).ready(function () {
        $(".avatar__account").click(function () {
            $(".avatar__account_dropdown").toggleClass("active");
        });
    });

    // tab
    $(function () {
        $(".tab_detail_lesson").tabs();
        $(".tab_detail_result_wp").tabs();
        $(".tab__detail_form").tabs();
        $(".tab__lesson").tabs();
        // $(".tab__skill_lesson").tabs();
    });


});

//toggle switch
$(document).ready(function () {
	$(".toggle").click(function () {
		$(this).toggleClass("active");
	});

	// tab cutstom

	var dashboardSetting = {
		arrows: false,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					dots: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					autoplay: true,
					slidesToShow: 1.2,
					slidesToScroll: 1,
				}
			}
		]
	};
	$('.js-dashboard').slick(dashboardSetting);
	var dashboardSlider = $(".js-dashboard");

	$('.tab-custom-href').click(function () {
		$('.tab-custom-href').removeClass('tab-custom-active');
		$(this).addClass('tab-custom-active');
	});
});

//menu dropdown account
$(document).ready(function () {
	$(".wp__content__user_info").click(function () {
		$(this).parent().toggleClass('active');
	});
});

//noti dropdown
$(document).ready(function () {
	$(".btn__noti").click(function () {
		$(".tab__noti_wp").toggleClass('active');
	});
});

//btn next course register
$(document).ready(function () {
	$(".button-next").click(function () {
		$("#course_register").tabs({ "active": 1 });
	});
	$(".button-previous").click(function () {
		$("#course_register").tabs({ "active": 0 });
	});
	// btn-submit
	$(".button-submit").click(function () {
		$(".wp__modal_confirm").toggleClass('active');
		$(".close__err_popup").click(function () {
			$(".wp__modal_confirm").removeClass('active');
		})
	});
});

//triggle tab resize
$(document).ready(function () {
	$(".triggle").click(function () {
		$(".tab__setting_list_box").toggleClass('active');
	});
	$(".drop__down").click(function () {
		$(".tab__setting_list").toggleClass('active');
	});

	// Fix menu hidden
	var heightHeader = $(".menu__sp").innerHeight();
	var heightCall = $(".group-btn-sp").innerHeight();
	var heightPage = $(window).innerHeight();
	var heightMenu = heightPage - heightHeader;
	$('.widget__menu_respon').css({
		height: heightMenu
	});
	// $('.group-btn-sp').css({
	// 	top: heightPage - heightCall
	// });

});

//popup login singin
jQuery(document).ready(function($){
	var $form_modal = $('#js__modal'),
		$dataUrl = $("#js__form-tabs ul").children('li').eq(0).attr('data-bg'),
		$dataUrl2 = $("#js__form-tabs ul").children('li').eq(1).attr('data-bg'),
		$form_login = $form_modal.find('.tabs-1'),
		$form_signup = $form_modal.find('.tabs-2'),
		$form_modal_tab = $('.tabs__group-label'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$form_forgot_password = $form_modal.find('.form__pwd'),
		$form_reset_password = $form_modal.find('.form__rspwd'),
		$reset_password_link = $form_modal.find('.js__rspwd-next'),
		$forgot_password_link = $form_modal.find('.forget-pass'),
		$back_to_login_link = $form_modal.find('.js__rspwd-back'),
		$main_nav = $('.js__active-acount');
	//open modal
	$main_nav.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('active');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('active');
			//show modal layer
			$form_modal.addClass('active');
			//show the selected form
			( $(event.target).is('.js-signup') ) ? signup_selected() : login_selected();
		}

	});

	//close modal
	$('#js__modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.modal__close') ) {
			$form_modal.removeClass('active');
			$form_modal_tab.removeClass('out');
		}
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$form_modal.removeClass('active');
			$form_modal_tab.removeClass('out');
		}
	});

	//switch from a tab to another
	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
	});

	//show forgot-password form
	$forgot_password_link.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//show resset-password form
	$reset_password_link.on('click', function(event){
		event.preventDefault();
		reset_password_selected();
	});

	//back to login from the forgot-password form
	$back_to_login_link.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		$form_login.addClass('active');
		$form_signup.removeClass('active');
		$form_forgot_password.removeClass('active');
		$form_reset_password.removeClass('active');
		$tab_login.parent().addClass('selected');
		$tab_signup.parent().removeClass('selected');
		$form_modal_tab.removeClass('out');
		$(".modal__background").attr('src', $dataUrl);
	}

	function signup_selected(){
		$form_login.removeClass('active');
		$form_signup.addClass('active');
		$form_forgot_password.removeClass('active');
		$tab_login.parent().removeClass('selected');
		$tab_signup.parent().addClass('selected');
		$(".modal__background").attr('src', $dataUrl2);
	}

	function forgot_password_selected(){
		$form_login.removeClass('active');
		$form_signup.removeClass('active');
		$form_forgot_password.addClass('active');
		$form_modal_tab.addClass('out');
	}

	function reset_password_selected(){
		$form_forgot_password.removeClass('active');
		$form_reset_password.addClass('active');
	}

});
$(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {

	    $(".js-trigger-video-modal").on("click", function(e){

	        e.preventDefault();

          var id = $(this).attr('data-youtube-id');

          var autoplay = '?autoplay=1';

          var related_no = '&rel=0';

          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;

          $("#youtube").attr('src', src);

          $("body").addClass("show-video-modal noscroll");

      });

      function close_video_modal() {

        event.preventDefault();

        $("body").removeClass("show-video-modal noscroll");

        $("#youtube").attr('src', '');

      }
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {

          close_video_modal();

      });
      $('body').keyup(function(e) {
          if (e.keyCode == 27) {

            close_video_modal();

          }
      });
	}
	toggle_video_modal();

});


