import { defineConfig } from 'umi';

export default defineConfig({
  title: '老根儿demo',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        { path: '/', redirect: './course' },
        { path: 'course', component: './Course', title: '课程记录' },
        { path: 'about', component: './About', title: '关于我们' },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});
