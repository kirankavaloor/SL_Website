$(document).ready(function(){

    //Nav Bar
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    // fixed nav bar
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed");
        }
    })

    $("#IOS").click(function(){
        $(".box1").show();
        $(".box2").hide();
        $(".box3").hide();
        $(".box4").hide();
      });

      $("#Android").click(function(){
        $(".box2").show();
        $(".box1").hide();
        $(".box3").hide();
        $(".box4").hide();
      });

      $("#Web").click(function(){
        $(".box3").show();
        $(".box1").hide();
        $(".box2").hide();
        $(".box4").hide();
      });

      $("#IOT").click(function(){
        $(".box4").show();
        $(".box1").hide();
        $(".box2").hide();
        $(".box3").hide();
      });


})

$.scrollIt({
    topOffset: -50
});