const webpack = require('webpack')
const path = require('path')
const loaders = require('./webpack.loaders')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const autoprefixer = require('autoprefixer')

// local css modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.css/,
    exclude: /(node_modules|public\/)/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]')
})

// local less modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.less/,
    exclude: /(node_modules|public\/)/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss!less')
})
// global css files
loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css')
})

module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../server/public'),
        filename: '[chunkhash].js'
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
    postcss: [autoprefixer({
        browsers: ['last 3 versions']
    })],
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('[contenthash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Webpack App',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.DedupePlugin()
    ]
}
