"use strict";

// support.js

const path = require('node:path');
const fs = require('node:fs');
const packageJson = path.resolve(__dirname, '..', '..', '..', 'package.json');

const readPackageJson = () => {
    try {
        const data = fs.readFileSync(packageJson, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports.Support = {
    packageJson: readPackageJson()
}