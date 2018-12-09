const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/Client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist/Client',
        hot: true
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            Styles: path.resolve('src/Client/styles'),
            HTML: path.resolve('src/Client/html'),
            Services: path.resolve('src/Client/scripts/services')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/Client']),
        new HtmlWebpackPlugin({
            title: 'BNI Form!'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/Client'),
        publicPath: '/'
    }
}