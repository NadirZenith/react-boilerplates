module.exports = [{
  name: 'client',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/client',
    hot: true
  }
}];
