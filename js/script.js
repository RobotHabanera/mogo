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














     
     






/* Funkcja do zmiany menu desktopowego na mobilne menu i vice versa w zależności od szerokości okna przeglądarki */


jQuery(function($){      
      

    
 var clickAllowed = true;
 var clickAllowed2 = true;
            hidden = true;     
    

    

   
      
     if ($(window).width()<=1199 || clickAllowed == true) {
     



 

                    $(".menu-trigger").click(function(event){
                        
                        
 

                    event.preventDefault();
                      var pos = $('.c-main-menu').offset().left;
                        var w = $('.c-main-menu').width();
                      var body = $("body");




                      $(".c-main-menu").animate({"left": 0}, 350);
                      $('body').animate({ "left": +200}, 350, function() { $('body').addClass('fade'); });  


                    }); clickAllowed = false;


    } else if ($(window).width()>1199 || clickAllowed == false) {
        

        
        $(".menu-trigger").unbind("click");
          
        clickAllowed = true;
    }

    
   
    
    if ($(window).width()>1199 || clickAllowed2 == true) {
 
   
        
       
        
        
        
        $(document).on("scroll", onScroll);

                 function onScroll(){
                        $('div.object1').remove();

                             
                            var scrollPos = $(document).scrollTop();
                             var menuBarOpenedOnce = 0;
                            $('.c-nav .c-main-menu .c-main-menu__link').each(function () {
                                var currLink = $(this);                           
                                var refElement = $(currLink.attr("href"));
                                var mega = refElement.offset().top - 80;
                                var megaplus = mega + 220;
                                if (mega <= scrollPos && megaplus + refElement.height() > scrollPos) {
                                    $('.c-nav .c-main-menu  .c-main-menu__link').removeClass("trala");
                                    currLink.one().addClass("trala");
                                    currLink.prepend('<div class="object1"></div>');
                                    var linkwidth = currLink.parent().width();
                                    $('div.object1').width(linkwidth);
                                    $('div.object1').show().stop().animate({
	                                   opacity: 1
                                    }, 700);
                                    currLink.show().stop().animate({
	                                   opacity: 1
                                    }, 1000);                                    
                                }
                                else{
                                    currLink.removeClass("trala");
                                    
                                }
                            });


                 } clickAllowed2 = false;
        
        } else if ($(window).width()<=1199 || clickAllowed2 == false) {
            
             $(document).off("scroll", onScroll);
            
            clickAllowed2 = true;
            
        }




     //smoothscroll
    $('.c-nav .c-main-menu .c-main-menu__link').on('click', function (e) {
        
        
                    var currLink = $(this); 
                    if (currLink.hasClass("trala")) {
        
                            
                    } else {
                        $('div.object1').remove();
                    }
        
        if ($(window).width()<=1199) {

            e.preventDefault();
            $('html,body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top -60
            }, 1000, function() { 
                
                $(".c-main-menu").animate({"left": -200}, 
                { duration: 200, queue: false });
                               
                $('html,body').animate({left: 0},
                {duration:200, queue: false});
      
        });
            
            
            
    } else if ($(window).width() > 1199) {
   

        
        $('html,body').unbind("animate");
        
      
        
    }
        

 
         if ($(window).width()>1199) {
             
 
                    e.preventDefault();
                    $(document).off("scroll");

                    $('.c-nav .c-main-menu  a').each(function () {
                        $(this).removeClass('trala');
                    })
                    $(this).addClass('trala');


                    $(this).prepend('<div class="object1"></div>');
                    var target = this.hash,
                        menu = target;
                    $target = $(target);
                    $('html, body').stop().animate({
                        scrollTop: $target.position().top - 80
                    }, 1200, 'swing', function (e) {
                        e.preventDefault();
                        location.hash = target;
                        $(window).on("scroll", onScroll);
                    }); 

      
         
             
             
             
        } else if ($(window).width()<=1199) {
            
                        $(document).on("scroll");
  
                    }
        
            });
  
    
onResize = function() {    

     
      if ($(window).width() <= 1199) {

                $('.c-nav .c-main-menu').css({ left: -200});        

          
      } else if ($(window).width() > 1199) {
          
                $('.c-nav .c-main-menu').css({ left: 0});
                $('body').css({left:0});

           
          
      }
 }  
    
    
    
    
    $(document).ready(onResize);
    
 
    $(window).on('resize', onResize);
});     

   








/* Wywołanie pluginu accordion z jquery-ui + dodanie z poziomu jQuery do tagu h3 tagu span do którego z kolei z poziomu css dodane są ikony */

$( function() {
    $( ".accordion" ).accordion({
        collapsible: true,
        heightStyle: 'content'
    });
  } );
      

$('.c-services-2 .accordion > h3').prepend('<span class="accord-icon"></span>');









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
     








/* Wywołanie nawigacji przyczepionej w odpowiedzi na scrollowanie w dół strony inicjowana na zdefiniowanym ScrollTop position */

$(window).scroll(function() {
  
		var ScrollPos = $(window).scrollTop();
    if (ScrollPos > 280) {
        $('.c-nav').addClass('fixed');
        $('.c-main-menu__link').addClass('c-main-menu__link--font');
        $('.c-main-menu h1 a').css("color", "#999999");
        $('.o-card').css('filter', 'brightness(60%)');
        $('.c-main-menu__search').css('filter', 'brightness(60%)');
        
    } else {
        
        $('.c-nav').removeClass('fixed');
        $('.c-main-menu__link').removeClass('c-main-menu__link--font');
        $('.c-main-menu h1 a').css("color", "white");
        $('.o-card').css('filter', '');
        $('.c-main-menu__search').css('filter', '');        
    }
    
});  










/* Funkcja setInterval tworzy pętlę zmieniających się slidów w headerze gdzie każdemu slidowi odpowiada zapełniający się progress bar */


$(document).ready(function(){
            // settings
            var $slider = $('.c-main-header'); // class or id of carousel slider
            var $slide = 'div.c-main-header__slide'; // could also use 'img' if you're not using a ul
            var $bar = $('.c-main-header');
            var $progress_wrap = 'li.c-header-switch__item';
            var $progress = 'div.c-header-switch__bar' ;            
            var $transition_time = 1000; // 1 second
            var $time_between_slides = 5000; // 4 seconds
            var $animation_time = 5300;

            function FirstAnimation(){
                $( ".c-header-switch__item" ).first().children("div:nth-child(1)")
                .clearQueue()
                .stop()
                .css(
                    {width:'0%'}
                )
                .animate({
                    width: "100%"
                }, $animation_time);

            }
            
           
            
            
            FirstAnimation();
    
            function slides(){
              return $slider.find($slide);
            }
            function progress_wrap_function(){
              return $bar.find($progress_wrap);
            }
            function progress_bar_function(){
              return $bar.find($progress);
            }            
            
            slides().fadeOut(0);

            
            // set active classes
            slides().first() .addClass('active_one') ;
            slides().first() .fadeIn($transition_time);
						progress_wrap_function().first().addClass('active_two') ;

           
           
           
           


function start(changeInterval) {
    if(changeInterval){
        $animation_time = changeInterval;
    }        
            // auto scroll 
            $interval = setInterval(
                    function () {
                        var $i = $slider.find($slide + '.active_one').index();
						var $i2 = $bar.find($progress_wrap + '.active_two').index();


                    function SecondAnimation(){
                        $( ".c-header-switch__item").eq($i2 + 1).children("div:nth-child(1)")

                        .stop()
                        .css(
                            {width:'0%'}
                        )
                        .animate({
                            width: "100%"
                        }, $animation_time); 

                    } 


                        slides().eq($i).removeClass('active_one');
                        slides().eq($i).fadeOut($transition_time);
												progress_wrap_function().eq($i2).removeClass('active_two');
                        

                        
                        if (slides().length == $i + 1) $i = -1;
                        if (progress_wrap_function().length == $i2 + 1) {
                              $i2 = - 1;
                             $( ".c-header-switch__item").last().children("div:nth-child(1)").css( "width", "0" );
	                        	$( ".c-header-switch__item").children("div:nth-child(1)").css( "width", "0" );
                            $( ".c-header-switch__item").children($progress).hide();
                            $( ".c-header-switch__item").children($progress).show();
                        }						 

                        // loop to start


                        slides().eq($i + 1).fadeIn($transition_time);
                        slides().eq($i + 1).addClass('active_one');

                        progress_wrap_function().eq($i2 + 1).addClass('active_two'); 

                        SecondAnimation((slides().size));


                    }, $transition_time + $time_between_slides
            );

}

    $(function() {
        start();
    } );

});











/* Google maps API czyli zainicjowanie mapy google na stronie */

	function initMap() {
        var uluru = {lat:-7.973660, lng: 112.663896};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


		window.onload = initMap;   
     













/* Funkcja wywołująca określone zachowania na stronie (związane z mapą google) po kliknięciu spana o klasie .open-map */


$('.open-map').on("click", function() {

	$(".map-icon").fadeOut("2000");
	$(".open-map").fadeOut("2000");
 	$(".o-hr--map").fadeOut("2000"); 
	$('.map-section').animate({
  	
    height: 800},
 { duration: 500, complete: function(){
                
                $(".map-section__mask").animate({"opacity": "0"}, 
                { duration: 500, complete: function(){
                
                $(".map-section__mask").hide();
                
                
                $(".map").animate({"opacity": "1"}, 
                { duration: 2000, complete: function(){
                              
                
            }});    
    }
    
    
    });
    
    } });
    

   
});














      
/* Mobile Menu --> Włącz i wyłącz pole search */



	$('.mobile-menu__item--search').click(function(e) {
    	e.preventDefault();
  	$('.c-form__search').addClass('search_active').fadeIn(slow);
  
  });

	$('.c-form__cancel').click(function(e) {
  			e.preventDefault();
  	$('.c-form__search').removeClass('search_active');
  
  });  
















/* Wywołanie pluginu nice scroll z custumowymi ustawieniami scrollbara */
   

    $('html,body').niceScroll({
        
        cursorcolor: "#fff",
        cursorwidth: "8px",
        cursoropacitymax: .5,
        cursorborder: "1px solid darkgrey",
        background: "",
        horizrailenabled:false
        
        
        
    });
    


















$(window).scroll($.debounce( 250, true, function(){
    $('#scrollMsg').html('SCROLLING!');
} ) );
$(window).scroll($.debounce( 250, function(){
    var scrollTOP = $(document).scrollTop();
var page = $("html, body");
    
	if (scrollTOP >= 200 ) {
          
          
          

          

    	$('.back-to-top').stop(page).animate ({
      
      	 "right" : "10px"
      
      }, 500, function() { { }
      	});   
      
    } 	else if (scrollTOP < 200)  {


        
    	$('.back-to-top').stop(page).animate({ "right" : "-50px"}, 500, function() { {  }
      	});   
        

    }
} ) );



$("a[href='#top']").click(function(e) {
    e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


































