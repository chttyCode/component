# 搭建模版工程

- 依赖安装

  1.  基础配置
      - webpack webpack-cli
      - clean-webpack-plugin / html-webpack-plugin
  2.  开发配置
      - webpack5 已集成 webpack-dev-server
      - webpack serve
  3.  react 配置

      - react react-dom

      - typescript @types/react @types/react-dom babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

      - babel 配置(会根据预设的浏览器兼容列表从 stage-4 选取必须的 plugin)

        - @babel/preset-env
          - 三个概念
            - 最新 ES 语法：比如，箭头函数
            - 最新 ES API：，比如，Promise
            - 最新 ES 实例方法：比如，String.prototype.includes
          - useBuiltIns:
            - false,无视 browserslist 配置引入 polyfill
              - 需要入口手动引入 import '@babel/polyfill';
            - entry,根据 browserslist 配置全量引入 polyfill
              - 需要指定 corejs,即使用腻子定义的版本
                - corejs v2 老 @babel/preset-env 会引入 v2
                  - 入口手动引入 import '@babel/polyfill'
                - corejs 指定为 3 版本时，使用方式
                  - 则 import '@babel/polyfill' 需要改成 import 'core-js/stable';import 'regenerator-runtime/runtime';
                  - 单独安装 core-js@3
            - usage
              - 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill
              - 需要指定 corejs
                - v2
                - v3
            - usage vs entry
              - usage : 局部引入，可能会有代码冗余(不同模块可能会引入相同的腻子)，增加代码体积
              - entry: 入口全局引入，可能会污染全局作用域
        - @babel-runtime

          - 解决 preset-env 的全局污染
          - 手动按需加载腻子

          ```js
          import Promise from "babel-runtime/core-js/promise";
          const p = new Promise(() => {});
          console.log(p);
          ```

        - @babel-plugin-transform-runtime
          - 按需引入、局部引入
          - 解决的问题
            - 文件重复引入的问题
            - 全局引入的全局污染问题
          - 可以在我们使用新 API 时自动 import babel-runtime 里面的 polyfill
          - 参数
            - corejs
              - @babel/runtime-corejs2
              - @babel/runtime-corejs3
            - helpers
              - 移除局部的 babel helpers 引用 babel-runtime/helpers
            - regenerator
              - false 使用的是全局的 regeneratorRuntime
              - true 使用的是自定义 runtime
        - polyfill-service
          - https://polyfill.io/v3/
        - 基本解析配置
          - preset
        - 装饰器语法支持
          - @babel/plugin-proposal-decorators
          - @babel/plugin-proposal-class-propertiess
            - loose 严格模式 ，定义属性的方式不同
        - 兼容性 polify vs runtime
          - polyfill(腻子)，会直接在全局对象的原型上添加属性，造成全局污染，开发业务常用
          - runtime 重新构建新原生的对象，体积较大，开发第三方库常用

  4.  style-loader css-loader sass-loader sass post-loader

           - node-sadd to dart-sass

           ```js
            {
              loader: "sass-loader",
              options: {
                  implementation: require("sass"), //使用dart-sass代替node-sass
              },
            },
           ```

           - 兼容性
             - postcss-loader 可以使用 PostCSS 处理 CSS
             - postcss-preset-env 把现代的 CSS 转换成大多数浏览器能理解的,该包已经包含了 autoprefixer 和 browsers 选项

           ```js
           npm i postcss-loader postcss-preset-env -D
           ```

           ```js
            <!-- postcss.config.js -->
            let postcssPresetEnv = require('postcss-preset-env');

            module.exports={
            plugins:[postcssPresetEnv({
                browsers: 'last 5 version'
            })]
            }
            ```

  5.  代码格式化

  - npm install prettier -D --save-exact
    - [prettier](https://github.com/chttyCode/KnPoint/blob/master/content/eslint-typescript.md)
  - husky&lint-staged
    - [husky](https://github.com/chttyCode/KnPoint/blob/master/content/eslint-typescript.md)
  - json
    - 文件提示
    - https://github.com/schemastore/schemastore/#contribute
    - https://cloud.tencent.com/developer/article/1633934

# 组件开发流程

- 样式
  - 定义全局变量、mixin
    - !default 定义变量默认值
    - hsl($hue,$saturation,$lightness)：通過色相（hue）、飽和度(saturation)和亮度（lightness）的值創建一個顏色；
    - 定义对象
    - The \_ (underscore) is a partial for scss. That means the stylesheet its going to be imported (@import) to a main stylesheet i.e. styles.scss.
- 组件开发

  - 需求分析
    - 属性
  - 开发
    - mvp(最小可用原型)
    - 接口定义
    - 取出所有的属性
    - 计算属性
    - 根据属性显示具体的节点
    - 定义组件的样式变量
    - 添加注释
    - story
    - test
      - 改变 input value
      - async await
  - 持续优化(warnning 错误引起，在组件内部 hack)
    - onChange
    - 受控组件 vs 非受控组件
      - value&defaultValue 同时存在
        - 在组件内部 fixed delete defaultValue
      - value
        - 由 undefined 到被赋值，React 会抛错
        - 在组件内部 fixed,默认赋值为空
    -

- test 开发

  - [jest](https://jestjs.io/)
    - 概念
      - 断言 https://jestjs.io/docs/using-matchers
  - 使用

    - 安装
      - jest
      - react 集成
        - Enzyme(airbnb),操作如 jq
        - @testing-library/react
        ```js
        npm i jest @types/jest @testing-library/react @testing-library/jest-dom -D
        ```
      - jest: jest 核心库
      - @testing-library/react： 测试 React 组件的解决方案
      - @testing-library/jest-dom : 扩展 jest 的 dom 断言
    - add jest.config.js
    - setupTests.ts
      - 全局 test 通用配置
    - 使用
      - getByText vs queryByText
        - 返回类型不同
      - mock Funcitons:捕获函数是否被调用
        - 定义 disabledProps
        - 触发事件
        ```js
        <!-- import { render, fireEvent } from "@testing-library/react"; -->
        fireEvent.click(element);
        ```

    > [testing-library](https://testing-library.com/docs/)

# 组件文档生产

- 组件开发的痛点
  - 入口文件不适合组件库
  - 行为事件的调用和属性设置
- 组件库开发
  - 属性展示
  - 事件调用
  - 生产使用文档
- storybook
  - install
    - npx sb init
    - Storybook 6.2 includes experimental Webpack 5 support. webpack 兼容有问题
      - https://github.com/storybookjs/storybook/issues/14878
    - Clean install https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324
  - post-scss
    - add @storybook/addon-postcss in addons
    - Deprecated default PostCSS plugins
    - webpack TypeError: Cannot read property 'get' of undefined
    - https://github.com/storybookjs/storybook/issues/14497
- scss
  - npm i -D @storybook/preset-scss css-loader sass sass-loader style-loader
- 待修复
  - scss+postcss??
- 展示源码

  - https://github.com/storybookjs/deprecated-addons/tree/master/addons/info
  - add @storybook/addon-info @types/storybook\_\_addon-info

  ```js
  //preview.js
  import React from "react";
  import { withInfo } from "@storybook/addon-info";
  import "../src/styles/index.scss";
  export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    info: { inline: true, header: false },
  };

  export const decorators = [
    withInfo,
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ];
  ```

- 展示参数

  ```js
  // main.js
  module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-scss",
    ],
    core: {
      builder: "webpack5",
    },
    webpackFinal: (config) => {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")],
            },
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              shouldExtractLiteralValuesFromEnum: true,
              propFilter: (prop) => {
                if (prop.parent) {
                  return !prop.parent.fileName.includes("node_modules");
                }
                return true;
              },
            },
          },
        ],
      });
      return config;
    },
  };
  ```

- 打包
  - 什么是模块
    - 可重用
    - 可维护
  - 模块化历史
    - 全局+命名口空间
    - commjs+AMD
    - es6 esMoudle
      - 允许静态分析，可以实现 tree-shaking
      - 循环引用&动态绑定
  - 输出的模块类型
    - eg:
      - Ant Design 支持浏览器引入
        - 不支持按需加载
    - 采用 esmoudle 打包文档
  - 入口文件
    - package.json
      - main
      - module
    - index.tsx(入口文件)
  - 样式采用文件单独引入的方式
  - 配置打包 tsconfig.build.json
  - 配置打包命令
    - 打包
  - 本地开发测试
    -

# CI/CD
