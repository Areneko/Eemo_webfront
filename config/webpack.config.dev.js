const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    devServer: {
        historyApiFallback: true,
        inline: true,
        open: true,
        host: 'localhost',
        port: 8080
    }
});