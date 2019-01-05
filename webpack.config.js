var path = require('path'); //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: [
        path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack-dev-server的配置
    devServer: {
        port: 2333,
        open: true,
        inline: true,
        contentBase: 'dist/',
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                include: path.resolve(__dirname, 'app')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: 'node_modules'
            }
        ]
    },
    plugins: [
        // 入口模板文件解析
        new HtmlwebpackPlugin({
            title: 'rich text',
            template: path.resolve(__dirname, 'templates/index.ejs'),
            inject: 'body'
        })
    ],
    devtool: 'source-map'
}
module.exports = config;