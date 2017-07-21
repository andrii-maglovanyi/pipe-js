import { resolve } from 'path'

export default {
  entry: './src/index',
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'pipe',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader', include: resolve(__dirname, 'src') }
    ]
  }
};
