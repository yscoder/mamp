const webpack = require('webpack')
const path = require('path')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || "8888"

// global css
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\]src[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
})
// local less modules
loaders.push({
    test: /\.less$/,
    exclude: /[\/\\](node_modules|public\/)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]__[hash:base64:5]',
        'less'
    ]
})

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|public\/)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]__[hash:base64:5]'
    ]
})

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/main.jsx' // your app's entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        root: [
            path.join(__dirname, './src'),
            path.join(__dirname, './node_modules')
        ]
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
