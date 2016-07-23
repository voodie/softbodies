'use strict';

const webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        filename: './build/build.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
}