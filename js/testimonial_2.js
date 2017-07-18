/* Testimonial 2 gdzie funkcja slideChangeHook zarrządza przyciskami prev/next, a faktyczna zmiana slidów jest na samym dole kodu, uwzględnione są tu także zmiany w odpowiedzi na zmianę szerokości okna przeglądarki */



function windowSize2() {
    
    
  
    
if ($(window).width()<=768) {
    
  var szer1slidu = $('section.c-testimonials2 blockquote.c-testimonial2').width();
  var wys1slidu = $('section.c-testimonials2 blockquote.c-testimonial2').height();
	var slideCount = $('.c-testimonial2').length;
  var calosc = slideCount * szer1slidu;

        
	$('div.c-testimonials2__mask').css({
  	width: szer1slidu,
    height: wys1slidu
  });
  

	$('.c-testimonials-list2').css ({
  	width: calosc,
   
  });
    
    	var currslide = parseInt( $('.c-testimonials-list2').data('slide') );
    
  if ( currslide == 1 ) {
    
    	$('.c-testimonials-list2').css (
  	
            "left", "0px"
            
        );
      
       } else if ( currslide == 2 ) {

            $('.c-testimonials-list2').css (

                "left", "-300px"
            );
  } else if ( currslide == 3 ) {

            $('.c-testimonials-list2').css (

                "left", "-600px"
            );
  }

} else if ($(window).width() > 768) {
  var szer1slidu = $('section.c-testimonials2 blockquote.c-testimonial2').width();
  var wys1slidu = $('section.c-testimonials2 blockquote.c-testimonial2').height();
	var slideCount = $('.c-testimonial2').length;
  var calosc = slideCount * szer1slidu;

        
	$('div.c-testimonials2__mask').css({
  	width: szer1slidu,
    height: wys1slidu
  });
  

	$('.c-testimonials-list2').css ({
  	width: calosc,

  });
    

    	var currslide2 = parseInt( $('.c-testimonials-list2').data('slide') );
    
  if ( currslide2 == 1 ) {
    
    	$('.c-testimonials-list2').css (
  	
            "left", "0px"
            
        );
      
       } else if ( currslide2 == 2 ) {

            $('.c-testimonials-list2').css (

                "left", "-1000px"
            );
  } else if ( currslide2 == 3 ) {

            $('.c-testimonials-list2').css (

                "left", "-2000px"
            );
  }    
    
}
    
  var active2 = false;    
    
function slideChangeHook2( direction ) {

	var slide2 = parseInt( $('.c-testimonials-list2').data('slide') );

	if ( direction == 'next' ) {
  	slide2++;
  	$('.c-testimonials-list2').data('slide', slide2);
  } else if ( direction == 'prev' ) {
  	slide2--;
	  $('.c-testimonials-list2').data('slide', slide2);
  }
  
  if ( slide2 == 1 ) {
  	$('.o-control--prev2').attr("disabled", true);
    $('.o-control--prev2').addClass("color");
  } else {
	  $('.o-control--prev2').attr("disabled", false);
      $('.o-control--prev2').removeClass("color");
  }
  
  if ( slide2 == slideCount ) {
  	$('.o-control--next2').attr("disabled", true);
        $('.o-control--next2').addClass("color");
  } else {
	  $('.o-control--next2').attr("disabled", false);
    $('.o-control--next2').removeClass("color");
  }

}

      
      
	$('.o-control--next2').click(function(e) {

        	e.preventDefault();
          
           if (active2 || parseInt($('.c-testimonials-list2').data('slide')) + 1 > slideCount) {
               return;
             }
             
                     slideChangeHook2('next2');
          active2 = true;
        $('.c-testimonials-list2').animate({'left': $('.c-testimonials-list2').position().left-szer1slidu}, 500, function() { { active2 = false; }
      	});   
       
  });
  
  
  	$('.o-control--prev2').click(function(e) {
        e.preventDefault();
          if (active2 || parseInt($('.c-testimonials-list2').data('slide')) - 1 < 1 ) {
                return;
            }
                    slideChangeHook2('prev');
        active2 = true;
        $('.c-testimonials-list2').stop().animate({
          'left': $('.c-testimonials-list2').position().left+szer1slidu}, 500, function() {
        { active2 = false; }
      	});
        
  			});        
    
    
    
    
    
    
    
    
    
    
} windowSize2();
      
      
$(window).resize(function() {

    

    
    
  windowSize2();    
    
    
    
    
});