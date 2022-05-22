const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
        }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new MiniCssExtractPlugin({ filename: 'app.css' }),
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Swiper: path.resolve(__dirname, 'src/vendor/swipe.js')
      })
  ]
};