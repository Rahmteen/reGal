var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname + '/public'),
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