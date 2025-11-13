const { env } = require('node:process')
const { Paths } = require('./src/config/paths')
const { DotEnv } = require('./src/config/dotEnv')
const { Bootstrap4Sass } = require('./src/sass/bootstrap4-sass')
const { Bootstrap4Grunt } = require('./src/grunt/bootstrap4-grunt')
const { Templates } = require('./src/templates/grunt')
const path = require('node:path')

module.exports.Bootstrap4 = {
    name: "@vigihdev/bootstrap4-bundle",
    basepath: env?.BASEPATH_BOOTSTRAP4_BUNDLE,
    node: env?.NODE_MODULES_BOOTSTRAP4,
    Paths: Paths,
    DotEnv: DotEnv,
    script_path: path.join(__dirname, 'src', 'scripts', 'grunt.sh'),
    Sass: Bootstrap4Sass,
    grunt: Bootstrap4Grunt,
    Templates: Templates,
}