var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        },
        {
          test: /\.(png|jpe?g|webm|mp4|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'media/'
            }
          }
        },
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        { 
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'] 
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },

      ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
  },
  devServer: {
      host: 'localhost',
      hot: true,
      port: 8080,
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      inline: true,
      proxy: { "/api": { target: 'http://localhost:3000', secure: false}
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      })
  ]
}