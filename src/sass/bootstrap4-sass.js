// bootstrap4-sass.js
const path = require("node:path");
const fs = require("node:fs");
const { Paths } = require("../config/paths");


// Sass Configuration
const sass = {
    dist: {
        options: {
            sourceMap: false,
            'no-source-map': true,
            style: 'expanded'
        },
        files: {
            [path.join(Paths.LIBRARIES.BOOTSTRAP, 'dist/css/bootstrap.css')]:
                path.join(Paths.LIBRARIES.BOOTSTRAP, 'scss/bootstrap.scss')
        }
    }
};

// Copy Files Configuration
const copyFiles = [
    // JavaScript Files
    { expand: true, cwd: path.join(Paths.LIBRARIES.BOOTSTRAP, 'dist/js'), src: ['bootstrap.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.SELECT2, 'dist/js'), src: ['select2.full.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.POPPER, 'dist/umd'), src: ['popper.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.OWL_CAROUSEL, 'dist'), src: ['owl.carousel.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.EONASDAN, 'tempus-dominus/dist/js'), src: ['tempus-dominus.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.HANDLEBARS, 'dist'), src: ['handlebars.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.JQUERY, 'dist'), src: ['jquery.min.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.TYPEAHEAD, 'dist'), src: ['typeahead.bundle.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.EASYTIMER, 'dist'), src: ['easytimer.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.INFINITE_SCROLL, 'dist'), src: ['infinite-scroll.pkgd.js'], dest: Paths.DIST.JS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.CLIPBOARD, 'dist'), src: ['clipboard.js'], dest: Paths.DIST.JS },

    // CSS Files
    { expand: true, cwd: path.join(Paths.LIBRARIES.BOOTSTRAP, 'dist/css'), src: ['bootstrap.css'], dest: Paths.DIST.CSS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.SELECT2, 'dist/css'), src: ['select2.css'], dest: Paths.DIST.CSS },
    { expand: true, cwd: path.join(Paths.LIBRARIES.EONASDAN, 'tempus-dominus/dist/css'), src: ['tempus-dominus.css'], dest: Paths.DIST.CSS }
];

// Concat Files Configuration
const concatFiles = {
    // JavaScript
    [path.join(Paths.DIST.JS, 'moment.js')]: [
        path.join(Paths.LIBRARIES.MOMENT, 'moment.js'),
        path.join(Paths.LIBRARIES.MOMENT, 'locale/id.js')
    ],

    // CSS
    [path.join(Paths.DIST.CSS, 'owl.carousel.css')]: [
        path.join(Paths.LIBRARIES.OWL_CAROUSEL, 'dist/assets/owl.carousel.css'),
        path.join(Paths.LIBRARIES.OWL_CAROUSEL, 'dist/assets/owl.theme.default.css'),
        path.join(Paths.LIBRARIES.OWL_CAROUSEL, 'dist/assets/owl.theme.green.css')
    ]
};

// Build Files
const buildsJs = [
    'moment.js',
    'popper.js',
    'handlebars.js',
    'bootstrap.js',
    'select2.full.js',
    'infinite-scroll.pkgd.js',
    'owl.carousel.js',
    'tempus-dominus.js',
    'typeahead.bundle.js'
]
    .map(f => path.join(Paths.DIST.JS, f))
    .filter(f => fs.existsSync(f));

const buildsConcatCss = [
    'bootstrap.css',
    'owl.carousel.css',
    'select2.css',
    'tempus-dominus.css'
]
    .map(f => path.join(Paths.DIST.CSS, f))
    .filter(f => fs.existsSync(f));


module.exports.Bootstrap4Sass = {
    basepath: Paths.Basepath,

    sass: sass,

    copy: {
        main: {
            files: copyFiles
        }
    },

    concat: {
        options: {
            separator: ';'
        },
        dist: {
            files: concatFiles
        }
    },

    builds: {
        concat: {
            [path.join(Paths.BUILDS.JS, 'bootstrap-bundle.js')]: buildsJs
        },

        concat_css: {
            main: {
                files: {
                    [path.join(Paths.BUILDS.CSS, 'bootstrap-bundle.css')]: buildsConcatCss
                }
            }
        },

        stripCssComments: {
            options: {
                preserve: false
            },
            dist: {
                files: {
                    [path.join(Paths.BUILDS.CSS, 'bootstrap-bundle.css')]:
                        [path.join(Paths.BUILDS.CSS, 'bootstrap-bundle.css')]
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: Paths.DIST.JS,
                        src: ['jquery.min.js'],
                        dest: Paths.BUILDS.JS
                    }
                ]
            }
        }
    },
};