// Wow js
// ===========================================================
$(function(){
    new WOW().init();
});

// Navbar
// ===========================================================
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});