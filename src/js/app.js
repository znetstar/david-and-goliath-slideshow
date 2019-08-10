const $ = window.jQuery = window.$ = require('jquery');
require('velocity-animate');
const ejs = require('ejs');
const Reveal = window.Reveal = require('reveal.js/js/reveal');

(async () => {
    const fns = {

    }

    const existingMaps = {};
    Reveal.addEventListener('slidechanged', (event) => {
        const ele = $(event.currentSlide);
        if ($(ele).is('.full')) {
            $('.slides').addClass('full');
        } else {
            $('.slides').removeClass('full');
        }

        setTimeout(() => {
            const video = $('.slide-background.present video')[0];
            if (video) {
                $(video).css({ opacity: '1' });
                $(ele).addClass('playing');
                video.onpause = void(0);
                video.onpause = () => {
                    $(ele).removeClass('playing');
                };

                video.onplay = () => {
                    $(ele).addClass('playing');
                };

                function enter () {
                    video.pause();
                    $(video).animate({ opacity: '0.75' });
                }; 

                function leave() {
                    video.play();
                    $(video).animate({ opacity: '1' });
                }; 
                
                $('p', ele).on('mouseenter', enter);
                $('p', ele).on('mouseleave', leave);

                video.onended = () => {
                    $(ele).removeClass('playing');
                    $(video).animate({ opacity: '1' });
                    video.onpause = void(0);
                    video.onplay = void(0);
                    $('p', ele).off('mouseenter', enter);
                    $('p', ele).off('mouseleave', leave);
                };
            }
        }, 4);
     });
    
    Reveal.initialize({
        autoPlayMedia: true,
        dependencies: [
		    { src: '/lib/zoom.js', async: true },
        ]
    });

    window.$ = $;
})();
