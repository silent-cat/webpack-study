const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js',
    print:'./src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist', // 告知 dev server，从什么位置查找文件
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 只生成用到的文件
  },
  optimization: {
    runtimeChunk: 'single',
  },
  
};