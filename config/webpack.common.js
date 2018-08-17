const webpack = require('webpack');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');
const paths = require('./paths');

dotenv.config({ path: paths.dotenv });

const isProd = process.env.NODE_ENV === 'production';

const cssModule = ({ modules = false }) => [
  isProd ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 2,
      camelCase: true,
      minimize: true,
      modules,
      localIdentName: '[local]-[hash:base64:5]'
    }
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('precss'),
        require('autoprefixer')({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 10' // React doesn't support IE9 anyway
          ],
          flexbox: 'no-2009'
        })
      ]
    }
  },
  {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: true
    }
  }
];

module.exports = {
  target: 'web',
  entry: {
    polyfills: [require.resolve('whatwg-fetch')],
    app: [paths.appIndexJs]
  },
  context: paths.appSrc,
  output: {
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].chunk.js',
    path: paths.appBuild,
    publicPath: '/'
  },
  resolve: {
    unsafeCache: true,
    modules: ['node_modules', paths.appNodeModules],
    mainFields: ['browser', 'jsnext:main', 'main', 'module'],
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.mjs'],
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      ),
      'react-native': 'react-native-web',
      '~': paths.appSrc
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        enforce: 'pre',
        include: [paths.appSrc, paths.appConfig],
        exclude: paths.appNodeModules,
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        include: paths.appSrc,
        exclude: paths.appNodeModules,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: paths.appGlobalStyles,
        use: cssModule({ modules: true })
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: paths.appGlobalStyles,
        use: cssModule({ modules: false })
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        exclude: paths.appNodeModules,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: paths.appNodeModules,
        loader: require.resolve('svg-url-loader'),
        options: {
          // Inline files smaller than 10 kB
          limit: 10 * 1024,
          name: 'static/media/[name].[hash:8].[ext]',
          noquotes: true
        }
      },
      {
        test: [/\.(mp4|webm)$/],
        exclude: paths.appNodeModules,
        loader: require.resolve('url-loader'),
        options: {
          // Inline files smaller than 10 kB
          limit: 10 * 1024,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        exclude: paths.appNodeModules,
        loader: require.resolve('html-loader')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: paths.appNodeModules,
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.xml$/,
        exclude: paths.appNodeModules,
        loader: require.resolve('xml-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // {
      //   exclude: [/\.(js|jsx|ts|tsx|mjs)$/, /\.html$/, /\.json$/],
      //   loader: require.resolve('file-loader'),
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]'
      //   }
      // },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: true, // show a warning when there is a circular dependency
      cwd: process.cwd()
    }),
    new webpack.HashedModuleIdsPlugin(),
    new Dotenv({
      systemvars: true,
      silent: true
    }),
    new CaseSensitivePathsPlugin(),
    new StyleLintPlugin({
      configFile: paths.appStylelintConfig,
      files: '**/*.s?(a|c)ss',
      syntax: 'scss',
      failOnError: false
    }),
    new webpack.ProvidePlugin({})
  ]
};
