const $ = window.jQuery = window.$ = require('jquery');
require('velocity-animate');
const ejs = require('ejs');
const Reveal = window.Reveal = require('reveal.js/js/reveal');

/* Taken from <https://stackoverflow.com/a/5624139>. Thank you Tim Down! */
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

(async () => {
    const fns = {

    }

    const existingMaps = {};
    Reveal.addEventListener('slidechanged', (event) => {
        if ($(event.currentSlide).is('.full')) {
            $('.slides').addClass('full');
        } else {
            $('.slides').removeClass('full');
        }
    });
    
    Reveal.initialize({
        autoPlayMedia: true,
        dependencies: [
		    { src: '/lib/zoom.js', async: true },
        ]
    });

    window.$ = $;
})();
