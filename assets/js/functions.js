$(function(){
  smoothScrool(300);
  workSlide();
  workLoad();
  logoEffect();
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  typed();
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
function logoEffect() {
  $('#logo').hover(
    function(){
      var $this = $(this);
      $this.addClass("animated hinge");
      setTimeout(function(){
        $this.removeClass("animated hinge");
      },2000);
    }
  );
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

function typed(){
  $("header h1 .typed-area").typed({
    strings: ["Custom Tailored","Quailty Focused","Awesome Support","Mobile Optimized"],
    typeSpeed: 30,
    backDelay: 3000
  });
}
