/*
 * Enables to test a single Spec file
 * 
 * Example :: $ node testSingleSpec.js src/app/testSpec.js
 * 
 * Inspired by - http://stackoverflow.com/questions/24276239/detecting-environment-when-running-karma
 */

const args = process.argv;
const Server = require('karma').Server;
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const karmaConfig = {
  config: null,
  set(input) {
    this.config = input;
  }
};

//check if filepath is given
if (args.length < 3) {
  console.log('NO filepath given as argument');
  process.exit(1);
}

//does the file exists?
if (!fs.existsSync(args[2])) {
  console.log(args[2] + ' does not exist');
  process.exit(1);
}

//get original config
require(path.join(__dirname, 'karma.conf.js'))(karmaConfig);

//more verbose output when working with single file
karmaConfig.config.logLevel = karmaConfig.config.LOG_DEBUG;

//output mode
karmaConfig.config.reporters = ['spec'];

//modify Spec file path for Karma - in karma.config.js src: 'src'
const testFile = 'app' + args[2].split('app')[1];

//exclude Spec files
karmaConfig.config.files.some((element, index, array) => {
  if (element === 'app/**/*.js') {//pattern in karma.conf.js, here will be overwritten
    array[index] = 'app/**/!(*Spec).js';
    return true;
  }
});

//add single Spec file
karmaConfig.config.files.push(testFile);

//init server
const server = new Server(karmaConfig.config, err => {
  if (err) {
    console.log('error during running: ' + err);
  }
});

//run server
server.start();
