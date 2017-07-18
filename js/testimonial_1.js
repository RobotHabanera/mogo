/* Testimonial 1 gdzie funkcja slideChangeHook zarrządza przyciskami prev/next, a faktyczna zmiana slidów jest na samym dole kodu, uwzględnione są tu także zmiany w odpowiedzi na zmianę szerokości okna przeglądarki */



function windowSize() {
    
    
  
    
if ($(window).width()<=768) {
    
  var szer1slidu = $('section.c-testimonials blockquote.c-testimonial').width();
  var wys1slidu = $('section.c-testimonials blockquote.c-testimonial').height();
	var slideCount = $('.c-testimonial').length;
  var calosc = slideCount * szer1slidu;

        
	$('div.c-testimonials__mask').css({
  	width: szer1slidu,
    height: wys1slidu
  });
  

	$('.c-testimonials-list').css ({
  	width: calosc,
   
  });
    
    	var currslide = parseInt( $('.c-testimonials-list').data('slide') );
    
  if ( currslide == 1 ) {
    
    	$('.c-testimonials-list').css (
  	
            "left", "0px"
            
        );
      
       } else if ( currslide == 2 ) {

            $('.c-testimonials-list').css (

                "left", "-300px"
            );
  } else if ( currslide == 3 ) {

            $('.c-testimonials-list').css (

                "left", "-600px"
            );
  }

} else if ($(window).width() > 768) {
  var szer1slidu = $('section.c-testimonials blockquote.c-testimonial').width();
  var wys1slidu = $('section.c-testimonials blockquote.c-testimonial').height();
	var slideCount = $('.c-testimonial').length;
  var calosc = slideCount * szer1slidu;

        
	$('div.c-testimonials__mask').css({
  	width: szer1slidu,
    height: wys1slidu
  });
  

	$('.c-testimonials-list').css ({
  	width: calosc,

  });
    

    	var currslide2 = parseInt( $('.c-testimonials-list').data('slide') );
    
  if ( currslide2 == 1 ) {
    
    	$('.c-testimonials-list').css (
  	
            "left", "0px"
            
        );
      
       } else if ( currslide2 == 2 ) {

            $('.c-testimonials-list').css (

                "left", "-1000px"
            );
  } else if ( currslide2 == 3 ) {

            $('.c-testimonials-list').css (

                "left", "-2000px"
            );
  }    
    
}
    
  var active = false;    
    
function slideChangeHook( direction ) {

	var slide = parseInt( $('.c-testimonials-list').data('slide') );

	if ( direction == 'next' ) {
  	slide++;
  	$('.c-testimonials-list').data('slide', slide);
  } else if ( direction == 'prev' ) {
  	slide--;
	  $('.c-testimonials-list').data('slide', slide);
  }
  
  if ( slide == 1 ) {
  	$('.o-control--prev').attr("disabled", true);
    $('.o-control--prev').addClass("color");
  } else {
	  $('.o-control--prev').attr("disabled", false);
      $('.o-control--prev').removeClass("color");
  }
  
  if ( slide == slideCount ) {
  	$('.o-control--next').attr("disabled", true);
        $('.o-control--next').addClass("color");
  } else {
	  $('.o-control--next').attr("disabled", false);
    $('.o-control--next').removeClass("color");
  }

}

      
      
	$('.o-control--next').click(function(e) {

        	e.preventDefault();
          
           if (active || parseInt($('.c-testimonials-list').data('slide')) + 1 > slideCount) {
               return;
             }
             
                     slideChangeHook('next');
          active = true;
        $('.c-testimonials-list').animate({'left': $('.c-testimonials-list').position().left-szer1slidu}, 500, function() { { active = false; }
      	});   
       
  });
  
  
  	$('.o-control--prev').click(function(e) {
        e.preventDefault();
          if (active || parseInt($('.c-testimonials-list').data('slide')) - 1 < 1 ) {
                return;
            }
                    slideChangeHook('prev');
        active = true;
        $('.c-testimonials-list').stop().animate({
          'left': $('.c-testimonials-list').position().left+szer1slidu}, 500, function() {
        { active = false; }
      	});
        
  			});        
    
    
    
    
    
    
    
    
    
    
} windowSize();
      
      
$(window).resize(function() {

    

    
    
  windowSize();    
    
    
    
    
});
        
        