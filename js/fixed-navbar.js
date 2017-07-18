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