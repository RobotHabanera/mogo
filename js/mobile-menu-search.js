      
/* Mobile Menu --> Włącz i wyłącz pole search */



	$('.mobile-menu__item--search').click(function(e) {
    	e.preventDefault();
  	$('.c-form__search').addClass('search_active').fadeIn(slow);
  
  });

	$('.c-form__cancel').click(function(e) {
  			e.preventDefault();
  	$('.c-form__search').removeClass('search_active');
  
  });  