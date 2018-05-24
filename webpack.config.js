const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './app/main.js',
    },
    output: {
        path: path.resolve(__dirname, './app/wpk'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap'
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // new UglifyJsPlugin(),
    ]
};
