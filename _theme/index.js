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
    path: '/404',
    component: './template/NotFound'
  }, {
    path: '/components/:doc',
    dataPath: '/:doc',
    component: './template/Components'
  }, {
    path: '/articles/:doc',
    component: './template/Articles'
  // }, {
  //   path: '/playground',
  //   component: './template/Playground'
  }]
};