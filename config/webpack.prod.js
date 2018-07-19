const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

process.env.NODE_ENV = 'production';

const regexpStyle = /\.(css|less|styl|scss|sass|sss)$/;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: regexpStyle,
        exclude: paths.appGlobalStyles,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false
            }
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 2,
                camelCase: true,
                sourceMap: true,
                minimize: true
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
              query: {
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: regexpStyle,
        include: paths.appGlobalStyles,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false
            }
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 2,
                camelCase: true,
                sourceMap: true,
                minimize: true
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
              query: {
                sourceMap: false
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })
  ],
  optimization: {
    flagIncludedChunks: true,
    occurrenceOrder: true,
    usedExports: true,
    sideEffects: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
