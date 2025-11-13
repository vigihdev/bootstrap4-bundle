// config/dotEnv.js
const path = require('node:path');
const { env } = require('node:process')

class DotEnv {

    constructor() {
        env.GRUNT_BOOTSTRAP4_BUNDLE = path.join(__dirname, '..', 'grunt');
        env.SASS_BOOTSTRAP4_BUNDLE = path.join(__dirname, '..', 'sass');
        env.CONFIG_BOOTSTRAP4_BUNDLE = path.join(__dirname, '..', 'config');
        env.SCRIPTS_BOOTSTRAP4_BUNDLE = path.join(__dirname, '..', 'scripts');
    }

    static boot(basePath = process.cwd()) {
        // Set base path dari environment
        env.BASE_PATH_BOOTSTRAP4_BUNDLE = basePath;
        return new DotEnv();
    }

    getGrunt() {
        return env?.GRUNT_BOOTSTRAP4_BUNDLE
    }

    getBasePath() {
        return env?.BASE_PATH_BOOTSTRAP4_BUNDLE
    }

    getConfig() {
        return env?.BASE_PATH_BOOTSTRAP4_BUNDLE
    }

    getScripts() {
        return env?.BASE_PATH_BOOTSTRAP4_BUNDLE
    }

}

module.exports.DotEnv = DotEnv