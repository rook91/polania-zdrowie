const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = [{
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: '../',
        },{
            from: './src/old-src',
            to: '../',
            toType: 'dir'
        }]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    output: {
        path: __dirname + '/dist/js',
        publicPath: '/',
        filename: 'bundle.js'
    },
}];
