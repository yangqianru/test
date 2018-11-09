'use strict'
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.basic.conf');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.(css|less)$/,
                include: [path.join(__dirname, '..', 'src'),path.join(__dirname, '..', 'static/css')],
                use: ['style-loader','css-loader','less-loader'],
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        contentBase: path.join(__dirname, '..', 'dist'),
        compress: true,
        host: 'localhost',
        port: 9999,
        open: true,
        // openPage:'index.html/#/Agent',
        overlay: {
            warnings: true,
            errors: false
        },
        publicPath: '/',
        //quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false
        }
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': require('../config/dev.env')
        // }),//配置全局常量
        new webpack.HotModuleReplacementPlugin(), //在程序运行过程中替换/添加/删除模块，无需重新加载整个页面
        new webpack.NamedModulesPlugin(), //显示模块相对路径
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks:['Main'],
            template:path.join(__dirname, '..', 'index.html'),
            Inject:true,
        }), //简化Html文件创建，可自动生成Html文件
        new FriendlyErrorsPlugin(), //友好的报错提示信息
    ]
})

module.exports = devWebpackConfig;