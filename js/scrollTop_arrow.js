






  

  


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