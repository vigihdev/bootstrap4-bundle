const path = require('node:path');
const fs = require('node:fs');
const { cwd, env } = require('node:process');
env.BASEPATH_BOOTSTRAP4_BUNDLE = path.join(cwd(), '..', 'testBuild')
env.NODE_MODULES_BOOTSTRAP4 = path.join(cwd(), 'node_modules')
const { Bootstrap4 } = require('./index')

console.log(`Server From ${__dirname}\n`);
console.log(Bootstrap4.basepath)
// console.log(Bootstrap4.node)
console.log(Bootstrap4.Sass.sass.dist.files)
console.log(Bootstrap4.Sass.copy.main.files)
console.log(Bootstrap4.script_path)