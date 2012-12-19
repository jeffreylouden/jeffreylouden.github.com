(function( $, win, doc ) {
    "use strict";
    
    var
        HEIGHT          =   'height',
        PX              =   'px',

        body            =    $('body'),
        windowHeight    =    $(win).outerHeight(),
        header          =    $('header');

    function headerSize( headerHeight ) {
        if (body.width() > 768) {
            header.css(HEIGHT, (headerHeight - 90) + PX);
        } else {
            header.css(HEIGHT, '74' + PX);
        }
    }

    $(win).resize(function () {
        headerSize($(this).outerHeight());
    });
    
    headerSize(windowHeight);
    
})(jQuery, window, document);