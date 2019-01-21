var path = require('path');

module.exports = {
  exclude: /should-be-ignore/,
  source: ['./components', './articles'],
  output: './_site',
  // theme: './_theme',
  // themeConfig: {
  //   home: '/',
  //   sitename: 'Hello Name',
  //   tagline: 'what is this',
  //   github: 'https://github.com/Future-component/react-document-scaffold',
  //   // 组件目录顺序
  //   comOrder: {
  //     Cover: 1,
  //     Test: 2,
  //   }
  // },
  entry: {
    index: {
      theme: './_theme',
      htmlTemplate: './_theme/static/template.html', 
    }
  },
  port: 8888,
  webpackConfig(config) {
    config.resolve.alias = {
      // 'react-doc': path.join(process.cwd(), 'lib'),
      'react-router': 'react-router/umd/ReactRouter',
    };
    return config;
  }
}; 