'use strict';

var path = require('path');

module.exports = {
  lazyLoad: false,
  home: '/', 
  plugins: [
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react'
  ],
  routes: [{
    path: '/',
    component: './template/Cover'
  }, {
    path: '/component/:doc',
    dataPath: '/:doc',
    component: './template/Doc'
  }]
};