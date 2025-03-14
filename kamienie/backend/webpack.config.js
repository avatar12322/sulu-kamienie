const path = require('path');

const  RWSWebpackWrapper  = require('@rws-framework/server/rws.webpack.config');

const executionDir = process.cwd();

module.exports = RWSWebpackWrapper({
  dev: true,  
  tsConfigPath: executionDir + '/tsconfig.json',
  entry: `${executionDir}/src/index.ts`,
  executionDir: executionDir,  
  outputDir:  path.resolve(executionDir, 'build'),
  outputFileName: 'rws.server.js'
});