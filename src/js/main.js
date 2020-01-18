// browserify needed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// https://frontender.info/gulp-browserify-starter-faq/
// var imagesLoaded = import('../../node_modules/imagesloaded');
var imagesLoaded = require('imagesloaded');
// var masonry = import('../../node_modules/masonry-layout');
var masonry = require('masonry-layout');

console.log("imagesLoaded = ")
console.log(imagesLoaded);
console.log("masonry = ");
console.log(masonry);


// var container  = document.querySelector('.ideas-cards');

// imagesLoaded(container , function() {
//   var msnry = new Masonry(container , {
//     // options
//     itemSelector: 'ideas-card',
//     columnWidth: 200,
//     stagger: 30
//   });

// } );