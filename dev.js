const path = require('node:path');
const fs = require('node:fs');
const { cwd, env } = require('node:process');
env.BASEPATH_BOOTSTRAP4_BUNDLE = path.join(cwd(), '..', 'testBuild')
env.NODE_MODULES_BOOTSTRAP4 = path.join(cwd(), 'node_modules')
const { Bootstrap4 } = require('./index')

console.log(`Server From ${__dirname}\n`);
const dotEnv = new Bootstrap4.DotEnv();
dotEnv.boot(path.join(__dirname, '.env'));

var template = Bootstrap4.Templates.grunt
template = template.replace(/{{init_cwd}}/g, `${cwd()}`)
template = template.replace(/{{env.BASEPATH_BOOTSTRAP4_BUNDLE}}/g, `${cwd()}`)
template = template.replace(/{{env.NODE_MODULES_BOOTSTRAP4}}/g, `${cwd()}/node_modules`)
