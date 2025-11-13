// config/dotEnv.js
const { env } = require('node:process')

class DotEnv {

    constructor() { }

    static boot(basePath = process.cwd()) {
        // Set base path dari environment
        env.BASE_PATH_BOOTSTRAP4_BUNDLE = basePath;
        return this;
    }

}

module.exports.DotEnv = DotEnv