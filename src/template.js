const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const employee = require('./lib/employee');
const manager = require('.lib/manager');
const engineer = require('.lib/engineer');
const intern = require('.lib/intern');
const { getMaxListeners } = require('process');

const testEmployee = new employee(Chris, 23, "chrismuto@gmail.com");