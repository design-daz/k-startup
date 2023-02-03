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

//   $(".hd-nav").mouseover(function () {
//     $("nav").stop().slideDown();
//   });

//   $(".hd-nav").mouseleave(function () {
//     $("nav").stop().slideUp();
//   });

  $(".hd-nav").hover(
    function () {
      $(".hover-bg").stop().show();

      //   $(".nav-bg").stop().show();
      $("nav").stop().slideDown();
    },
    function () {
      $(".hover-bg").stop().hide();

      $("nav").stop().hide();
      //   $(".nav-bg").stop().slideUp();
    }
  );

  $(".nav-bg").hover(
    function () {
      $(".hover-bg").stop().show();

      $("nav").stop().show();
    },
    function () {
      // $(".nav-bg").stop().hide();
      $(".hover-bg").stop().hide();

      $("nav").stop().hide();

      // $(".nav-bg").stop().slideUp();
    }
  );
}); //ready end
