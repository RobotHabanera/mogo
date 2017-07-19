

     
     






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

                 function onScroll(event){
                        $('div.object1').remove();

                             event.preventDefault();
                            var scrollPos = $(document).scrollTop();
                             var menuBarOpenedOnce = 0;
                            $('.c-nav .c-main-menu .c-main-menu__link').each(function () {
                                var currLink = $(this);     
                                if (currLink.length) {
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
                    }, 1200, 'swing', function () {
                        location.hash = target;
                        $(document).on("scroll", onScroll);
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





























