/* Funkcja startCounter wywołuje animacje coutNum inicjowaną przez scrollbar znajdujący się na zdefiniowanym ScrollTop position */


$(window).scroll(startCounter);    
  function startCounter() {
  
  	var start = $(window).scrollTop();
    var first = $('.c-countup .c-countup__item').offset().top-1000;
    var second = $('.c-services').offset().top;
    var fired = 0;
      
      
  if (start >= first && start < second) {
      $(window).off("scroll", startCounter);
      
      
$('.c-countup .c-countup__item').each(function() {
    
      var $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.children("div").text()}).one().animate({


        countNum: countTo

      },

      {

        duration: 2000,
        easing:'linear',
        step: function() {
          $this.children("div").text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.children("div").text(this.countNum);
          //alert('finished');
        }

      });  

});

} else {
	
}

};      
     