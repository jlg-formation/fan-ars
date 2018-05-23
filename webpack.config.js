const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, './app/wpk'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
