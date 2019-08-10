/*
    Results by district obtained from http://bit.ly/2Km68Qf - © 2012 Kos Media, LLC
    Results by state obtained from http://bit.ly/2YKQSWg - © 2017 MIT Election Data and Science Lab
    Economic and Population data obtained from https://www.census.gov/mycd - The United States Census Bureau
*/
const path = require('path');
const shell = require('shelljs');

module.exports = async function () {
    shell.cp('-r', './data/*', './dist/data');
}; 