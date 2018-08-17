const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  bail: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: paths.appPublic,
    watchContentBase: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc)
    },
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
    clientLogLevel: 'warning'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    minimize: false
  },
  performance: {
    hints: false
  }
});
