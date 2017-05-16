jQuery( '<h3>Filter by</h3>' ).insertBefore( '.top-trump-game .filters' );

var isoSortData = {};

jQuery('.top-trump:first-of-type .data-value.number').each(
    function() { 
        var buttonName = jQuery( this ).prev('.data-title').text();
        var dataAttr = jQuery( this ).attr('sort-data-id');
        isoSortData[dataAttr] = '.' + dataAttr;
        jQuery( '.button-group' ).append( '<button class="button" data-sort-value="'+ dataAttr +'">' + buttonName + '</button>' );
                  
    }
);

jQuery('.top-trump-game .button:first-of-type').addClass( "is-checked" );

// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.top-trump',
  layoutMode: 'fitRows',
  getSortData: isoSortData,
  sortAscending: false,
  fitRows: {
    gutter: 10
  }
});

// bind sort button click
var sortByGroup = document.querySelector('.sort-by-button-group');
sortByGroup.addEventListener( 'click', function( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var sortValue = event.target.getAttribute('data-sort-value');
  iso.arrange({ sortBy: sortValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  console.log(button.classList);
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
