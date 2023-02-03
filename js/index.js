$(document).ready(function () {

    $(".que").click(function() {
        $(this).next(".anw").stop().slideToggle(0);
       $(this).toggleClass('on').siblings().removeClass('on');
       $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
     });
    
    /* Lightbox Luminous */

    // new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    //     caption: function (trigger) {
    //         return trigger.querySelector('img').getAttribute('alt');
    //     }
    // });
    
}); //ready end