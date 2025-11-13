const path = require('node:path');
const fs = require('node:fs');
/** @type {DotEnv} */
const dotEnv = require('./src/config/dotEnv').DotEnv.boot();
const { cwd, env } = require('node:process');
const { DotEnv } = require('./src/config/dotEnv');
const { Paths } = require('./src/config/paths');
const { Bootstrap4Sass } = require('./src/sass/bootstrap4-sass');


console.log(`Server From ${__dirname}\n`);
console.log(dotEnv.getGrunt())
console.log(env)
// console.log(BootstrapSass.copy.main.files)