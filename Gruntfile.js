'use strict';
// Gruntfile.js
const { env } = require('node:process')
const path = require('node:path');
const fs = require('node:fs');
const HOME = process.env?.HOME;
const INIT_CWD = process.env?.INIT_CWD;

env.BASEPATH_BOOTSTRAP4_BUNDLE = '{{env.BASEPATH_BOOTSTRAP4_BUNDLE}}'
env.NODE_MODULES_BOOTSTRAP4 = '{{env.NODE_MODULES_BOOTSTRAP4}}'

if (!env.BASEPATH_BOOTSTRAP4_BUNDLE || !env.NODE_MODULES_BOOTSTRAP4) {
    throw new Error("Env not set");
}

/** @type {typeof import("./index")} */
const { Bootstrap4 } = require('{{init_cwd}}')

/** @type {typeof import('./src/grunt/bootstrap4-grunt')} */
const { Bootstrap4Grunt } = require('{{init_cwd}}/src/grunt/bootstrap4-grunt');

/** @param {import("grunt")} grunt */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-strip-css-comments');

    Bootstrap4Grunt(grunt);

    grunt.registerTask(`bootstrap4:test`, 'Test Grunt', async () => {
        grunt.log.writeln(__dirname);
        grunt.log.writeln(`Env Basepath Bootstrap4 Bundle : ${env.BASEPATH_BOOTSTRAP4_BUNDLE}`);
        grunt.log.writeln(`Env Node Modules Bootstrap4 : ${env.NODE_MODULES_BOOTSTRAP4}`);
    })

};
