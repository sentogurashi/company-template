import path from 'path';
import pkg from './package.json';

const { path: PATH } = pkg;

const config = {
  mode: 'production',
  entry: {
    common: `${PATH.SRC}${PATH.SCRIPTS}/common.js`,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, `${PATH.DEST}${PATH.SCRIPTS}/`),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    // modulesDirectories: ['node_modules'],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env'],
          plugins: ['@babel/transform-runtime'],
        },
      },
    ],
  },
  stats: {
    colors: true,
    chunks: false,
  },
};

export default config;
