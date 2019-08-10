const path = require('path');
const shell = require('shelljs');

module.exports = async function () {
    shell.cp('-r', './data/*', './dist/data');
}; 