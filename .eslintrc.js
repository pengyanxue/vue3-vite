/*
 * @Author: pengyanxue
 * @Date: 2021-04-29 14:45:13
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-04-29 14:52:20
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin: prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
