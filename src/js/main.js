// browserify needed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var imagesLoaded = import('../../node_modules/imagesloaded');
var imagesLoaded = require('imagesloaded');
// var masonry = import('../../node_modules/masonry-layout');
var Masonry = require('masonry-layout');

console.log("imagesLoaded = ")
console.log(imagesLoaded);
// console.log("masonry = ");
// console.dir(masonry);


var container  = document.querySelector('.ideas-cards');
console.log("container = ", container);

// function masonryFunc() {
//   var msnry = new Masonry(container, {
//     // masonry(container , { options
//     itemSelector: '.ideas-card',
//     columnWidth: 200,
//     stagger: 30
//   });
//   console.dir("msnry = ", msnry);
// }

imagesLoaded(container, function () {
  console.log("Masonry initialization...");
  var msnry = new Masonry(container, {
    // masonry(container , { options
    itemSelector: '.ideas-card',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20
    // stagger: 30
  });
});