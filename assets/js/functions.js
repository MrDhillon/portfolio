$(function(){
  smoothScrool(300);
  workSlide();
  workLoad();
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

function workLoad(){
  $.ajaxSetup({cache: true});

  $(".thumb-unit").on("click",function(){

    var $this = $(this),
        newTitle = $this.find("strong").text(),
        spinner = '<div class="loader">Loading...</div>',
        newHtml = "/work/site_"+$this.data("work")+".html";

    $(".project-load").html(spinner).load(newHtml);
    $(".project-title").html(newTitle);
  });

}
