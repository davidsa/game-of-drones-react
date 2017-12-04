const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/')
        }
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};