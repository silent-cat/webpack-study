const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared', // 多个chunk共享模块
          },
          another: {
            import: './src/another-module.js',
            dependOn: 'shared',
          },
          shared: 'lodash',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
};