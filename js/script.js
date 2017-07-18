
     
     






/* Funkcja do zmiany menu desktopowego na mobilne menu i vice versa w zależności od szerokości okna przeglądarki */


  
      

 
    

    

   
      
     if ($(window).width()<=1199 ) {
     



 

                    $(".menu-trigger").click(function(event){
                        
                        
 

                    event.preventDefault();
                      var pos = $(".c-main-menu").offset().left;
                        var w = $(".c-main-menu").width();
                      var body = $("body");




                      $(".c-main-menu").animate({"left": "0px"}, 350);
                      $("body").animate({ "left": "200px"}, 350, function() { $("body").addClass("fade"); });  


                    }); 


    } else if ($(window).width()>1199) {
        

        
        $(".menu-trigger").unbind("click");
          

    }

    
   
    
    if ($(window).width()>1199) {
 
   

        
        } else if ($(window).width()<=1199) {
            
             $(document).off("scroll", onScroll);
            

            
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
                200, queue: false });
                               
                $("html,body").animate({"left": "0px"},
                {duration:200, quee: false});
      
        });
            
            
            
    } else if ($(window).width() > 1199) {
   

        
        $("html,body").unbind("animate");
        
      
        
    }
        

 

        
            });
  

     

    










