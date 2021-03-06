const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = {
  entry: {
    app: './app/app.module.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.properties$/,
        use: ['properties-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html'
    }),
    new FaviconsWebpackPlugin({
      logo: './assets/fav.png',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin(
      [{
          from: 'assets/CNAME'
        },
        {
          from: 'assets/google989809d758b4217a.html'
        }
      ]
    )
  ]
};


module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    commonConfig.devtool = 'inline-source-map';
    commonConfig.devServer = {
      contentBase: './dist',
      historyApiFallback: true,
      publicPath: '/'
    }
  }

  if (argv.mode === 'production') {
    commonConfig.optimization = {};
    commonConfig.optimization.minimizer = [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})];
  }

  return commonConfig;
};
