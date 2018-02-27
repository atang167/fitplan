const path = require('path');

const webpackConfig = {
  entry: path.resolve(__dirname, './client/src/index.js'),
  output: {
    path: path.resolve(__dirname, './client/static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devtool: 'inline-source-map',
};

webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'react']},
});

webpackConfig.module.loaders.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader?modules',
    include: /flexboxgrid/
})

// webpackConfig.module.loaders.push({
//   test: /\.(css)$/,
//   loaders: ['style-loader', 'css-loader?url=false'],
//   exclude: /flexboxgrid/
// });

webpackConfig.module.loaders.push({
  test: /\.(png|jpg|gif|jpeg)$/,
  loader: 'file-loader',
  options: {}  
});

module.exports = webpackConfig;