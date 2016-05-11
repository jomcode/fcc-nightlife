const path = require('path');

module.exports = function karmaConfig(config) {
  const webpackConfig = require('../webpack.config.js');

  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [{ pattern: './config/spec.bundle.js', watched: false }],

    exclude: [],

    preprocessors: {
      './config/spec.bundle.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackServer: {
      quiet: false,
      noInfo: true,
      stats: {
        chunks: false,
        colors: true,
        timings: false,
        version: false,
        hash: false,
        assets: false,
        chunkModules: false,
        modules: false,
        children: false
      }
    },

    // coverageReporter: {},

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
