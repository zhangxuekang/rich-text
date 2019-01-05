var path = require('path'); //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: [
        path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // 指定编译后的代码位置为 dist/bundle.js
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
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'app'),
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