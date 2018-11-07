'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir){
    return path.join(__dirname,'..',dir);
}
module.exports = {
    entry: {
        Main:resolve('src/main.js'),
    },
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename:'[name].js',
        publicPath:'/',
    },
    resolve:{
        extensions:['.js','.json'],
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    resolve('src'),
                    resolve('static'),
                    resolve('node_modules/webpack-dev-server/client')
                ],
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 10000,
                            name: resolve('dist/static/imgs/[name].[ext]')
                        }
                    },
                    {
                        loader:'image-webpack-loader'    
                    }
                ]
            },
            {
                test:/\.art$/,
                use:[
                    {
                        loader:'art-template-loader',
                    }
                ]
            },
            {
                test:/\.(ttf|woff|eot)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            interpolate:require
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }

                }]
            }
        ]
    },
    plugins:[
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(__dirname, '../dist/static'),
        }]), //拷贝文件到构建目录
    ]
}