module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/lib/umd',
    filename: 'index.js',
    library: 'lottie-colorify',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
