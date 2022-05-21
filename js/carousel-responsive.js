var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 2000) {
    $('.carousel-responsive').removeClass('carousel-caption');
    $('.carousel-backdrop').css({
        'border-radius': '0 0 10px 10px'
    });

    $('.carousel-responsive').addClass('midway-change');

    } else if (ww >= 2000) {
    
    $('.carousel-responsive').addClass('carousel-caption');
    $('.carousel-backdrop').css({
        'border-radius': '10px 10px 10px 10px'
    });
    };
};

$(window).resize(alterClass);

//Run it when the page first loads:
alterClass();
