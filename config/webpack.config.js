const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    mode: process.env.NODE_ENV,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: '[name].dist.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader?modules',
                        options: {
                            url: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
}