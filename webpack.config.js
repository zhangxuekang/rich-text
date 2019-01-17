const path = require('path') //引入node的path库
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.resolve(__dirname, 'app/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定编译后的代码位置为 dist/bundle.js
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  // webpack-dev-server的配置
  devServer: {
    port: 2333,
    open: true,
    inline: true,
    contentBase: 'dist/',
  },
  module: {
    loaders: [{
      test: /(\.less)|(\.css)$/,
      exclude: 'node_modules',
      loaders: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /(\.js)|(jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader'],
    }]
  },
  plugins: [
    // 入口模板文件解析
    new HtmlwebpackPlugin({
      title: 'rich text',
      template: path.resolve(__dirname, 'templates/index.ejs'),
      inject: 'body'
    })],
  devtool: 'source-map'
}