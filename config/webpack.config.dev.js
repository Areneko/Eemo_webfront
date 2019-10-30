const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    devServer: {
        historyApiFallback: true,
        inline: true,
        open: true,
        host: 'localhost',
        port: 3000,
        proxy: {
            '/api/**': {
                target: 'http://localhost:8080',
                secure: false,
                logLevel: 'debug'
            }
        }
    }
});