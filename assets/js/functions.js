$(function(){
  smoothScrool(300);
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
