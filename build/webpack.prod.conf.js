'use strict'
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.basic.conf');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.(css|less)$/,
                include: [path.join(__dirname, '..', 'src'),path.join(__dirname, '..', 'static/css')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            }
        ]
    },
    devtool: 'source-map',
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename:path.posix.join('static', 'js/[name].[chunkhash].js'),
        chunkFilename: path.posix.join('static', 'js/[id].[chunkhash].js'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                },
                app:{
                    name: "app",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    plugins:[
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: true,
                parallel: 4
            }
        }),// 压缩js
        new ExtractTextPlugin({
            filename: path.posix.join('static', 'css/[name].css'),
            allChunks: true,
        }),//提取css到单独的文件
        new HtmlWebpackPlugin({
            filename:path.resolve(__dirname, '../dist/index.html'),
            chunks:['Main'],
            inject: true,
            minify:true,
            chunksSortMode: 'dependency',
            template:path.join(__dirname, '..', 'index.html'),
        }),//创建html模板
        new webpack.HashedModuleIdsPlugin(),//当模块未发生变化时，保持模块id的稳定性，实现 chunkhash 的稳定化
        new webpack.optimize.ModuleConcatenationPlugin(),//作用域提升,实现预编译功能,提升代码在浏览器中的执行速度
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     async: true,
        //     minChunks (module) {
        //       // any required modules inside node_modules are extracted to vendor
        //       return (
        //         module.resource &&
        //         /\.js$/.test(module.resource) &&
        //         module.resource.indexOf(
        //           path.join(__dirname, '../node_modules')
        //         ) === 0
        //       )
        //     }
        // }),//
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'app',
        //     async: true,
        //     children: true,
        //     minChunks: 3
        // })
    ]
})

module.exports = webpackConfig;