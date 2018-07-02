const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: "[local]__[name]__[hash:base64:5]"
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/public'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ]
}