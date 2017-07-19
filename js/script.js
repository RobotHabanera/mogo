
     
     






/* Funkcja do zmiany menu desktopowego na mobilne menu i vice versa w zależności od szerokości okna przeglądarki */


$(function(){      
      

    
 var clickAllowed = true;
 var clickAllowed2 = true;
            hidden = true;     
    

    

   
      
     if ($(window).width()<=1199 || clickAllowed == true) {
     



 

                    $(".menu-trigger").click(function(event){
                        
                        
 

                    event.preventDefault();
                      var pos = $(".c-main-menu").offset().left;
                        var w = $(".c-main-menu").width();





                      $(".c-main-menu").animate({"left": "0px"}, 350);
                      $("body").animate({ "left": "200px"}, 350, function() { $("body").addClass("fade"); });  


                    }); clickAllowed = false;


    } else if ($(window).width()>1199 || clickAllowed == false) {
        

        
        $(".menu-trigger").unbind("click");
          
        clickAllowed = true;
    }

    
   
    
    if ($(window).width()>1199 || clickAllowed2 == true) {
 
   
        
       
        
        
        
 clickAllowed2 = false;
        
        } else if ($(window).width()<=1199 || clickAllowed2 == false) {
            
             $(document).off("scroll", onScroll);
            
            clickAllowed2 = true;
            
        }




     //smoothscroll
    $(".c-nav .c-main-menu .c-main-menu__link").on("click", function (e) {
        
        
                    var currLink = $(this); 
                    if (currLink.hasClass("trala")) {
        
                            
                    } else {
                        $("div.object1").remove();
                    }
        
        if ($(window).width()<=1199) {

            e.preventDefault();
            $("html,body").animate({
                scrollTop: $($.attr(this, "href")).offset().top -60
            }, 1000, function() { 
                
                $(".c-main-menu").animate({"left": "-200px"}, 
                { duration: 200, queue: false });
                               
                $("html,body").animate({"left": "0px"},
                {duration: 200, queue: false});
      
        });
            
            
            
    } else if ($(window).width() > 1199) {
   

        
        $("html,body").unbind("animate");
        
      
        
    }
        

 

        
            });
  
    
onResize = function() {    

     
      if ($(window).width() <= 1199) {

                $(".c-nav .c-main-menu").css({ "left": "-200px"});        

          
      } else if ($(window).width() > 1199) {
          
                $(".c-nav .c-main-menu").css({ "left": "0x"});
                $("body").css({"left":"0px"});

           
          
      }
 }  
    
    
    
    
    $(document).ready(onResize);
    
 
    $(window).on("resize", onResize);
});     












