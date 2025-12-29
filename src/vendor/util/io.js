'use strict';
// io.js

const Console = require('node:console');
const { styleText } = require('node:util');

module.exports.Io = {
    write: (...message) => {
        Console.log(
            styleText('green', `${message.join(' ')}`)
        )
    },
    writeln: (...message) => {
        Console.log(
            styleText('green', `${message.join('\n')}`)
        )
    },
    title: (title) => {
        var length = title.length;
        var border = '='.repeat(length);

        Console.log([
            styleText('greenBright', `${title}`),
            border
        ].join('\n'));
    },
    log: (...message) => {
        Console.log(
            styleText('green', `${message.join(' ')}`)
        )
    },
    success: (message) => {
        Console.log(
            styleText('greenBright', `[OK] ${message}`)
        )
    },
    error: (message) => {
        Console.log(
            styleText('red', `[ERROR] ${message}`)
        )
    },
    warning: (message) => {
        Console.log(
            styleText('yellow', `[WARNING] ${message}`)
        )
    },
    info: (message) => {
        Console.log(
            styleText('cyan', `[INFO] ${message}`)
        )
    },
};