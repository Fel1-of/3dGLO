const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/dist'
  },
  mode:'development',
  devServer:{
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        
        use:{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            },
        },
        exclude: '/node_modules/'
      }
    ]
  }
}