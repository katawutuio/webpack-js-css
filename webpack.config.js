const path = require('path');

module.exports = {
  entry: './js_src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'assets'),
    publicPath: '/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/,
      exclude: /assets/,
      use:['style-loader', 'css-loader']
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'js/helpers'),
      'node_modules'
    ]
  }
};