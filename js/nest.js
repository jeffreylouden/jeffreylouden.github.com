(function( $, win, doc ) {
    "use strict";

    function updateHeader() {
        var h = (window.innerWidth / 2) + 'px';
        var els = document.getElementsByClassName('hd');
        document.getElementsByTagName('header')[0].style.height = h;
        for (var i = 0; i < els.length; i++) {
            els[i].style.height = h;
        }
    }

    $(window).on('resize', function() {
        updateHeader();
    });

    updateHeader();

})(jQuery, window, document);