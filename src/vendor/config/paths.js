const path = require("node:path");
const fs = require("node:fs");
const { cwd } = require("node:process");
const { Io } = require('../util/io');
const { Support } = require('../util/support');

const packageName = Support.packageJson.name;
if (!packageName) {
    throw new Error(`Package name "${packageName}" is not allowed.`);
}
var BASEPATH_MAIN, NODE_MAIN, ASSETS_MAIN, cwdBasePath;

cwdBasePath = path.resolve(cwd(), 'node_modules');
if (fs.existsSync(cwdBasePath) && fs.statSync(cwdBasePath).isDirectory()) {
    NODE_MAIN = cwdBasePath;
    BASEPATH_MAIN = path.resolve(cwdBasePath, '..');
    ASSETS_MAIN = path.resolve(BASEPATH_MAIN, 'src', 'assets');
}

// validate cwd packageName is valid
if (cwd().slice(`-${packageName.length}`) === packageName) {
    NODE_MAIN = path.resolve(cwd(), '..', '..', '..', 'node_modules');
    BASEPATH_MAIN = cwd();
    ASSETS_MAIN = path.resolve(BASEPATH_MAIN, 'src', 'assets');
}

// validate base path and node paths are valid
if (
    !fs.existsSync(BASEPATH_MAIN) || !fs.statSync(BASEPATH_MAIN).isDirectory() ||
    !fs.existsSync(NODE_MAIN) || !fs.statSync(NODE_MAIN).isDirectory() ||
    !fs.existsSync(ASSETS_MAIN) || !fs.statSync(ASSETS_MAIN).isDirectory()
) {
    throw new Error(`Base path "${BASEPATH_MAIN}" or node path "${NODE_MAIN}" or assets path "${ASSETS_MAIN}" is not allowed.`);
}

const BASEPATH = BASEPATH_MAIN;
const NODE = NODE_MAIN;
const ASSETS = ASSETS_MAIN;

module.exports.Paths = {
    Basepath: BASEPATH,
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
        LIGHTBOX2: path.join(NODE, 'lightbox2'),
        THEMES_STYLES: path.join(ASSETS, 'themes-styles'),
        THEMES_BOOTSTRAP: path.join(ASSETS, 'themes-bootstrap'),
        THEMES_COMPONENTS: path.join(ASSETS, 'themes-components'),
    }
}
