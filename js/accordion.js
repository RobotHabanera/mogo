/* Wywołanie pluginu accordion z jquery-ui + dodanie z poziomu jQuery do tagu h3 tagu span do którego z kolei z poziomu css dodane są ikony */

$( function() {
    $( ".accordion" ).accordion({
        collapsible: true,
        heightStyle: 'content'
    });
  } );
      

$('.c-services-2 .accordion > h3').prepend('<span class="accord-icon"></span>');
