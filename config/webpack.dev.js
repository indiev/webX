const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const common = require('./webpack.common');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

const regexpStyle = /\.(css|less|styl|scss|sass|sss)$/;

module.exports = merge(common, {
  mode: 'development',
  bail: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: paths.appPublic,
    watchContentBase: true,
    compress: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc)
    },
    // https: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
    overlay: false
    // open: true
  },
  module: {
    rules: [
      {
        test: regexpStyle,
        exclude: paths.appGlobalStyles,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2,
              sourceMap: true,
              camelCase: true,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 10' // React doesn't support IE9 anyway
                    ],
                    flexbox: 'no-2009'
                  }
                }
              },
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('precss'),
                require('autoprefixer')
              ]
            }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: regexpStyle,
        include: paths.appGlobalStyles,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2,
              sourceMap: true,
              camelCase: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 10' // React doesn't support IE9 anyway
                    ],
                    flexbox: 'no-2009'
                  }
                }
              },
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('precss'),
                require('autoprefixer')
              ]
            }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
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
