var webpack = require('webpack');
var path = require('path');


var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
    entry:  APP_DIR + '/Main.js',
    mode:'development',
    output:{
        path:BUILD_DIR,
        filename:'app-bundle.js'
    },
    module : {
        rules : [
          {
            test : /\.js?/,
            include : APP_DIR,
            use: 'babel-loader'
          },
     
        ]
      }
};
  
module.exports = config;
