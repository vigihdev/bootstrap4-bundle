const path = require("path");
const { env } = require('node:process')

const BASEPATH = env?.BASEPATH_BOOTSTRAP4_BUNDLE;
const NODE = env?.NODE_MODULES_BOOTSTRAP4;

module.exports.Paths = {
    Basepath: BASEPATH,
    DIST: {
        CSS: path.join(BASEPATH, 'dist', 'css'),
        JS: path.join(BASEPATH, 'dist', 'js')
    },
    BUILDS: {
        CSS: path.join(BASEPATH, 'builds', 'css'),
        JS: path.join(BASEPATH, 'builds', 'js')
    },
    LIBRARIES: {
        BOOTSTRAP: path.join(NODE, 'bootstrap'),
        EONASDAN: path.join(NODE, '@eonasdan'),
        INFINITE_SCROLL: path.join(NODE, 'infinite-scroll'),
        OWL_CAROUSEL: path.join(NODE, 'owl.carousel'),
        SELECT2: path.join(NODE, 'select2'),
        TYPEAHEAD: path.join(NODE, 'typeahead.js'),
        POPPERJS: path.join(NODE, '@popperjs'),
        BS5_LIGHTBOX: path.join(NODE, 'bs5-lightbox'),
        EASYTIMER: path.join(NODE, 'easytimer.js'),
        JQUERY: path.join(NODE, 'jquery'),
        MOMENT: path.join(NODE, 'moment'),
        POPPER: path.join(NODE, 'popper.js'),
        CLIPBOARD: path.join(NODE, 'clipboard'),
        HANDLEBARS: path.join(NODE, 'handlebars'),
        LIGHTBOX2: path.join(NODE, 'lightbox2')
    }
}
