// Can also be used with $(document).ready()
// $(window).load(function() {
//     $('.flexslider').flexslider({
//       animation: "slide"
//     });
// });
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 2000,
        direction: "vertical",
        reverse: true,
        pauseOnHover: true
    });
});
