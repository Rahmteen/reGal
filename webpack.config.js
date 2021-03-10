var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'file-loader',
                },
              },
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
              },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },

        ]
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        inline: true,
        proxy: { "/": { target: 'http://localhost:3000', secure: false }
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}