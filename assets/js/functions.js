$(function(){
  smoothScrool(300);
  workSlide();
});

function smoothScrool(duration){
  $('a[href^="#"]').on("click",function(event){
    var target = $( $(this).attr('href') );

    if(target.length){
      event.preventDefault();
      console.log(target);
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }

  });
}

function workSlide() {
  $(".thumb-unit").on("click",function(){
    $(".work-slider").css("left","-100%");
    $(".work-container").show();
  });
  $(".work-return").on("click",function(){
    $(".work-slider").css("left","0%");
    $(".work-container").hide(400);
  });
}
