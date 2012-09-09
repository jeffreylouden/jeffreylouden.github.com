(function( $, win, doc ) {
    "use strict";
    
    var body            =    $('body'),
        windowHeight    =    $(win).height(),
        header          =    $('header');

    function headerSize( headerHeight ) {
        if (body.width() > 768) {
            header.css('height', (headerHeight - 90) + 'px');
        } else {
            header.css('height', '74px');
        }
    }
        
    function init() {
        headerSize(windowHeight);
    }
    
    $(win).resize(function () {
        headerSize($(this).outerHeight());
    });
    
    init();
    
})(jQuery, window, document);