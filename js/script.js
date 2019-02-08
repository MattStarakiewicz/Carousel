'use strict';

var slideItem = document.getElementById('slide-item').innerHTML;

Mustache.parse(slideItem);

var listItem = '';

for(var i = 0; i < slidesData.length; i++){
  console.log(slidesData);
  listItem += Mustache.render(slideItem, slidesData[i]);
}

var results = document.querySelector('#results');
results.insertAdjacentHTML('beforeend', listItem);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

var buttonGroup = document.querySelector('.button-reset');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

