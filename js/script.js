$(document).ready(function () {
  // 리사이징 할때마다 새로고침
  //     var lastWidth = $(window).width();
  //     $(window).resize(function () {
  //       if ($(window).width() != lastWidth) {
  //           location.reload();
  //           lastWidth = $(window).width();
  //           return false;
  //       }
  //   });

  // ====== Nav ===== //

  if ($(window).width() >= 1400) {
    $(".hd-nav").hover(
      function () {
        $(".hover-bg").stop().show();

        //   $(".nav-bg").stop().show();
        $(".nav-bg").stop().slideDown();
      },
      function () {
        $(".hover-bg").stop().hide();

        $(".nav-bg").stop().hide();
        //   $(".nav-bg").stop().slideUp();
      }
    );

    $(".nav-bg").hover(
      function () {
        $(".hover-bg").stop().show();

        $(".nav-bg").stop().show();
      },
      function () {
        // $(".nav-bg").stop().hide();
        $(".hover-bg").stop().hide();

        $(".nav-bg").stop().hide();

        // $(".nav-bg").stop().slideUp();
      }
    );
  }

  if ($(window).width() < 1400) {
    $("ul.gnb>li").click(function () {
      $(this).find("ul.sub").stop().slideToggle();

      // $(".menu-btn.mob").css("transform","rotate(45deg)");
      $(this).addClass("on").siblings().removeClass("on");
    });

    $(".hd-m-menu").click(function () {
      // $("nav .nav-bg").show();
      $("nav .nav-bg").slideDown();

      $(".hd-m-menu").stop().hide();
      $(".hd-m-x").stop().show();
    });

    $(".hd-m-x").click(function () {
      // $("nav .nav-bg").hide();
      $("nav .nav-bg").slideUp();

      $(".hd-m-x").stop().hide();
      $(".hd-m-menu").stop().show();
    });
  }

  //   if ($(window).width() < 1400 && $(window).width() >= 360 ){
  //     $(".hd-nav").hover(
  //       function () {
  //         // $(".hover-bg").stop().hide();
  //       }
  //     );

  //     $(".nav-bg").hover(
  //       function () {
  //         $(".hover-bg").stop().hide();
  //       }
  //     );
  // };

  // ====== Nav - shadow ===== //

  // $(window).scroll(
  //   function () {

  //   var height = $(document).scrollTop();

  //   if (height >= 1) {
  //     $("header").addClass("b-shadow");
  //   } else {
  //     $("header").removeClass("b-shadow");
  //   }

  //   });

  // ====== Notice Swiper ===== //

  var swiper01 = new Swiper(".mySwiper.nt-sd", {
    direction: "vertical",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-down",
      prevEl: ".swiper-button-up",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  var swiper02 = new Swiper(".mySwiper.vs-sd", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  var swiper03 = new Swiper(".mySwiper.lt-sd-n", {
    navigation: {
      nextEl: ".swiper-button-next.n-btn-r",
      prevEl: ".swiper-button-prev.n-btn-l",
    },

    pagination: {
      el: '.swiper-pagination.n-lec',
      type: 'fraction',
    },

    // allowTouchMove : true,
  });

  // var swiper03_tab = new Swiper(".mySwiper.lt-sd-n.tab", {
  //   // slidesPerView: "2",
  //   // spaceBetween: 20,

  //   // pagination: {
  //   //   el: ".swiper-pagination.n-lec",
  //   //   type: "fraction",
  //   // },

  //   allowTouchMove : true,

  // });

  // var swiper03_mob = new Swiper(".mySwiper.lt-sd-n.mob", {
  //   // slidesPerView: "1",
  //   // slidesPerGroup : "4",

  //   // spaceBetween: 20,

  //   // grid: {
  //   //   column: 2,
  //   // },

  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   type: "fraction",
  //   // },

  //   allowTouchMove : true,

  // });

  var swiper04 = new Swiper(".mySwiper.lt-sd-p", {
    navigation: {
      nextEl: ".swiper-button-next.p-btn-r",
      prevEl: ".swiper-button-prev.p-btn-l",
    },

    pagination: {
      el: '.swiper-pagination.p-lec',
      type: 'fraction',
    },
  });

  // ====== Sub - btn (card/list) ===== //

  $(".filter-style > button").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $("#" + $(this).data("id"))
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  // ====== Sub - filter select ===== //

  $(".selected_item_con").click(function () {
    $(this).find(".select_style_1_con").stop().toggle();
  });



  // ====== [6.5.0] q&a Accordion  ===== //


  $(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(0);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".anw").siblings(".anw").slideUp(0); // 1개씩 펼치기
 });




}); //ready end
