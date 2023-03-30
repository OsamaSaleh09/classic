/*global $,document, window*/
$(window).ready(function () {

$(".toggle .fa-bars").click(function () {
    $(this).fadeOut(500);
    $(".toggle .fa-times").fadeIn(500);
    var width = $(document).width();
    if (width <= 992 ){
      $(".links").css("height","100vh");
    } else {
      $(".links").css("height","65px");

    }
    if (width >= 992 ){
        $(".logo").width("10%")
    }
    if ( width >= 576 && width <= 992 ) {
      $(".header").width("300px")
    }

})
$(".toggle .fa-times").click(function () {
  $(this).fadeOut(500);
  $(".toggle .fa-bars").fadeIn(500);
  $(".links").css("height","0");
  $(".header").width("100%");
  var width = $(document).width();
  if ( width >= 992 ) {
      $(".logo").width("100%")
  }
})
$(".links a").click(function(e) {
    "use strict";
    e.preventDefault();
    $(this).addClass("active");
    $("html,body").animate({
        scrollTop:$("#" + $(this).data("value")).offset().top - 59
    },1000);
});

$(window).scroll(function () {
     "use strict";
    /*if ($("html,body").scrollTop() >= 100){
        $(".header").css("background-color","#262626")
    }else {
        $(".header").css("background-color","transparent")
    }*/
    $(".scroll").each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 60) {
            var scroll = $(this).attr('id');
            $(".header .links a[data-value='" + scroll +"']").addClass("active").siblings().removeClass("active");

        }
    });
})
//slider
$(".fa-chevron-right").click(function () {
    $(".cont-text .active-slide").each(function () {
        if(! $(this).is(":last-child")){
           $(this).next().addClass("active-slide").siblings().removeClass("active-slide")
        } else {
            $(this).removeClass("active-slide")
            $(".cont-text .text").eq(0).addClass("active-slide");
        }
    })
});
$(".fa-chevron-left").click(function () {
    $(".cont-text .active-slide").each(function () {
        if($(this).is(":first-child")){
           $(this).removeClass("active-slide")
            $(".cont-text .text:last-child").addClass("active-slide");
        } else {
            $(this).prev().addClass("active-slide").siblings().removeClass("active-slide")
        }
    })
});

//testimonials
function sliderTow() {
    $(".slider-2 .active-2").each(function () {
        if (!$(this).is(":last-child")){
           $(this).delay(4000).animate({
               opacity: "0"
           },700, function () {
               $(this).removeClass("active-2").next().addClass("active-2").animate({
               opacity: "1"
           },1000);
                sliderTow();
           });
        } else {
            $(this).delay(4000).animate({
               opacity: "0"
           },700, function () {
               $(this).removeClass("active-2");
               $(".slider-2 div").eq(0).addClass("active-2").animate({
               opacity: "1"
           },1000)
                sliderTow();
           });
        }
    })
};
sliderTow();
//portofolio
$(".filter").click(function () {
    $($(this).data("filter")).show().siblings().not($(this).data("filter")).hide();

})
$(".filter").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected")
})


})
