(function( $, win, doc ) {
    "use strict";

	var
		// CONSTANT Declarations
        CENTERED            =   'centered',
        FIXED               =   'fixed',
        HIDE                =   'hide',
        HREF                =   'href',
        IMG                 =   'img',
        PIXEL               =   'px',
        SHOW                =   'show',

        // Variable Declarations
        noop            =   function() {},
        console         =    win.console || {"log": noop, "warn": noop, "error": noop},

        wndw                =   $(win),
        html                =   $('html'),
        body                =   $('body'),
        htmlbody            =   html.add(body),

        footnote            =   $('.footnote'),

        footer              =   $('footer'),
        credits             =   footer.find('#credits'),
        partyMode           =   credits.find('i'),
        modalLink           =   $('.modal'),
		modal,
		modalImage,
		partyOverlay;

	function createModal(url) {
        body.append('<div id="modal"><a class="close" href="#" title="Close">Close</a></div>');
        modal = $('#modal');

        var img = new win.Image();

        img.onload = function() {
            modal.prepend(img);
            modalImage = modal.find(IMG);
            
            repositionModalImage();
            
            modalImage.click(function(e){
                e.stopPropagation();
            });

        };

        img.src = url;

        modal.addClass(SHOW);
        htmlbody.addClass(FIXED);

        modal.find('.close').click(function(e) {
            e.preventDefault();
        });
        
        modal.click(function() {
            dismissModal();
        });
    }

    function repositionModalImage() {
        if (!modalImage) {
            modalImage = modal.find(IMG);
        }
        if (modalImage.height() < wndw.height()) {
            modalImage.addClass(CENTERED);
            modalImage.css({
                marginTop : '-' + (modalImage.height() / 2) + PIXEL,
                marginLeft : '-' + (modalImage.width() / 2) + PIXEL
            });
        } else {
            modalImage.removeClass(CENTERED);
            modalImage.css({
                marginTop : '0px',
                marginLeft : 'auto'
            });
        }
    }
    
    function dismissModal() {
        if (modal.length > 0) {

            htmlbody.removeClass(FIXED);
            modal.removeClass(SHOW).addClass(HIDE);

            setTimeout(function() {
                modal.remove();
            }, 200);
            
            wndw.off('resize', repositionModalImage);
        }
    }

    footnote.on('click', function(e) {
        var
            t       =   $(this),
            href    =   t.attr(HREF);
        e.preventDefault();
        htmlbody.animate({scrollTop: ($(href).offset().top - 100)}, 300);
    });

    modalLink.on('click', function(e) {
        e.preventDefault();
        createModal($(this).attr('data-url'));
    });

    $(doc.documentElement).keyup(function (event) {
        if (event.keyCode === 27) {
            dismissModal();
        }
    });

    wndw.resize(function() {
        if (modalImage) {
            repositionModalImage();
        }
    });

})(jQuery, window, document);