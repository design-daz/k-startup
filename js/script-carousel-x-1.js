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


  // ====== Notice Swiper ===== //

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // slidesPerGroup : 1,
    // slidesPerView : 1,
    // loopAdditionalSlides : 10,
    // loopFillGroupWithBlank : true,
    // spaceBetween : 0,

    // autoplay: {
    //   delay: 4000,
    // },
  });

  
}); //ready end
