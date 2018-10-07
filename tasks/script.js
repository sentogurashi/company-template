import PluginError from 'plugin-error';
import fancyLog from 'fancy-log';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';

const script = (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new PluginError('webpack', err);
    fancyLog('[webpack]', stats.toString(webpackConfig.stats));
    callback();
  });
};

export default script;
