(function( $, win, doc ) {
    "use strict";

	var
		// CONSTANT Declarations
        ANIMATE             =   'animate',
        CENTERED            =   'centered',
        FIXED               =   'fixed',
        HIDE                =   'hide',
        HREF                =   'href',
        ID                  =   'id',
        IMAGE               =   'image',
        IMG                 =   'img',
        PIXEL               =   'px',
        SHOW                =   'show',
        VIDEO               =   'video',

        // Variable Declarations
        noop            =   function() {},
        console         =    win.console || {"log": noop, "warn": noop, "error": noop},

        wndw                =   $(win),
        html                =   $('html'),
        body                =   $('body'),
        htmlbody            =   html.add(body),

        iframeString        =   '<iframe allowfullscreen frameborder="0" width="560" height="350" id="yt-{{{yt-id}}}" src="//www.youtube.com/embed/{{{yt-id}}}/?enablejsapi=1&amp;playerapiid={{{yt-id}}}&amp;wmode=transparent&amp;autohide=0&amp;autoplay=0&amp;fs=1&amp;hd=1&amp;rel=0&amp;showinfo=0&amp;start=&amp;theme=dark&amp;cc_load_policy=0"></iframe>',
        pattern             =   "{{{yt-id}}}",
        idReplacer          =   new RegExp(pattern, "g"),

        footnote            =   $('.footnote'),

        footer              =   $('footer'),
        credits             =   footer.find('#credits'),
        partyMode           =   credits.find('i'),
		partyOverlay        =   $('#party-mode'),

        modalLink           =   $('.modal'),
        modal,
        modalContent,
        modalContainer,
        modalContentType,

        Modal = {
            create: function(url) {
                if (url.indexOf('youtube') > -1) {

                    var id = url.split('?v=')[1];
                    modal.prepend('<div class="vid-contain"><div class="vid">' + iframeString.replace(idReplacer, id) + '</div></div>');

                    modalContentType = VIDEO;
                    modalContent = modal.find('iframe');

                    modalContent.click(function(e){
                        e.stopPropagation();
                    });

                } else {

                    var img = new win.Image();

                    img.onload = function() {
                        modal.prepend(img);

                        modalContent = modal.find(IMG);
                        modalContentType = IMAGE;

                        modalContent.click(function(e){
                            e.stopPropagation();
                        });

                    };

                    img.src = url;
                }

                modal.removeClass(HIDE).addClass(SHOW);
                htmlbody.addClass(FIXED);

                modal.find('.close').click(function(e) {
                    e.preventDefault();
                });

                modal.click(function() {
                    Modal.dismiss();
                });
            },
            dismiss: function() {
                if (modal.length > 0) {

                    htmlbody.removeClass(FIXED);
                    modal.removeClass(SHOW).addClass(HIDE);

                    setTimeout(function() {
                        modalContent.remove();
                    }, 200);
                }
            }
        };

    if ( modalLink.length ) {
        body.append('<div id="modal"><a class="close" href="#" title="Close">Close</a></div>');
        modal = $('#modal');
    }

    footnote.on('click', function(e) {
        var
            t       =   $(this),
            href    =   t.attr(HREF);
        e.preventDefault();
        htmlbody.animate({scrollTop: ($(href).offset().top - 75)}, 300);
    });

    modalLink.on('click', function(e) {
        e.preventDefault();
        Modal.create($(this).attr(HREF));
    });

    partyMode.click(function() {
        htmlbody.addClass(FIXED);
        partyOverlay.addClass(ANIMATE).addClass(SHOW);

        partyOverlay.on('click', function() {
            $(this).removeClass(SHOW);
            htmlbody.removeClass(FIXED);
        });
    });

    $(doc.documentElement).keyup(function (event) {
        if (event.keyCode === 27) {
            Modal.dismiss();
        }
    });

    if (window.location.href.indexOf('party-mode') > -1) {
        partyMode.click();
    }

})(jQuery, window, document);