'use strict';

//HTML TEMPLATE

var slideItem = document.getElementById('slide-item').innerHTML;

Mustache.parse(slideItem);

var listItem = '';

for(var i = 0; i < slidesData.length; i++){
  console.log(slidesData);
  listItem += Mustache.render(slideItem, slidesData[i]);
}

var results = document.querySelector('#results');
results.insertAdjacentHTML('beforeend', listItem);

// CAROUSEL

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

// CAROUSEL PROGRESSBAR

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// MAP

window.initMap = function(){
    var coords1 = {lat: 51.24882129, lng: 22.56860822};   
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 19, center: coords1});
    // The marker, positioned at Uluru

    for(var i = 0; i < slidesData.length; i++){
      console.log(slidesData);
      var marker = new google.maps.Marker({position: slidesData[i].coords, map: map});
    }
    

   // var marker = new google.maps.Marker({position: coords1, map: map});
}


