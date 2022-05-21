$(window).scroll(function() {
    if ($(this).scrollTop() >= 20) {        // If page is scrolled more than 50px
        $('#arrow-down').fadeOut(200);      // Fade out the down arrow
    } else {
        $('#arrow-down').fadeIn(200);       // Else fade in the down arrow
    }
});
