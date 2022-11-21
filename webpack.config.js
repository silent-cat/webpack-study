const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loade
        use: ['style-loader', 'css-loader'], // 应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
};