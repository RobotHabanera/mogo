hash = hash.replace( /^#/, '' );
var node = $( '#' + hash );
if ( node.length ) {
  node.attr( 'id', '' );
}
document.location.hash = hash;
if ( node.length ) {
  node.attr( 'id', hash );
}




hash = hash.replace( /^#/, '' );
var fx, node = $( '#' + hash );
if ( node.length ) {
  node.attr( 'id', '' );
  fx = $( '<div></div>' )
          .css({
              position:'absolute',
              visibility:'hidden',
              top: $(document).scrollTop() + 'px'
          })
          .attr( 'id', hash )
          .appendTo( document.body );
}
document.location.hash = hash;
if ( node.length ) {
  fx.remove();
  node.attr( 'id', hash );
}