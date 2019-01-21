const isDev = process.env.NODE_ENV === 'development';

const pluginAntdConfig = {
  babelConfig: JSON.stringify({
    plugins: [
      'transform-class-properties',
      'transform-object-rest-spread',
      'transform-decorators-legacy',
    ],
  }),
};

module.exports = {
  port: 8888,
  root: '/',
  source: {
    docs: './docs',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    root: '/',
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {},
  plugins: [
    `bisheng-plugin-react?${JSON.stringify(pluginAntdConfig)}`,
  ],
  webpackConfig(config) {
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter',
    };
    config.externals = config.externals || {};
    config.externals['react-router-dom'] = 'ReactRouterDOM';
    config.externals = Object.assign({}, config.externals, {
      react: 'React',
      'react-dom': 'ReactDOM',
    });

    return config;
  },
  htmlTemplateExtraData: {
    isDev,
  },
};
