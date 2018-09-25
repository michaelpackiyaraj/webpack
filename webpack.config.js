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
            exclude : /node_modules/,
            use: 'babel-loader'
          },
          {
            test : /\.css?/,
            use: ['style-loader','css-loader']
          },
          {
            test : /\.scss?/,
            use: ['style-loader','css-loader','sass-loader']
          },
          {
            test : /\.(jpe?g|png|gif|svg)$/i,
            use: 'file-loader'
          },
        ]
      }
};
  
module.exports = config;
