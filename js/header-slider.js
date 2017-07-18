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