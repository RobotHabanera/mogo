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