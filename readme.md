# 搭建模版工程

* 依赖安装
    1. 基础配置
        - webpack webpack-cli
        - clean-webpack-plugin / html-webpack-plugin
    2. 开发配置
        - webpack5 已集成 webpack-dev-server
        - webpack serve
    3. react配置
        - react react-dom 

        - typescript @types/react @types/react-dom babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

        - babel配置(会根据预设的浏览器兼容列表从stage-4选取必须的plugin)
            - @babel/preset-env
                - 三个概念
                    - 最新ES 语法：比如，箭头函数
                    - 最新ES API：，比如，Promise
                    - 最新ES 实例方法：比如，String.prototype.includes
                - useBuiltIns:
                    - false,无视browserslist配置引入polyfill
                        - 需要入口手动引入import '@babel/polyfill';
                    - entry,根据browserslist配置全量引入polyfill
                        - 需要指定corejs,即使用腻子定义的版本
                            - corejs v2 老 @babel/preset-env 会引入v2
                                - 入口手动引入import '@babel/polyfill' 
                            - corejs指定为3版本时，使用方式
                                - 则 import '@babel/polyfill' 需要改成 import 'core-js/stable';import 'regenerator-runtime/runtime';
                                - 单独安装core-js@3
                    - usage
                        - 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill
                        - 需要指定corejs
                            - v2
                            - v3
                    - usage vs entry
                        - usage : 局部引入，可能会有代码冗余(不同模块可能会引入相同的腻子)，增加代码体积
                        - entry: 入口全局引入，可能会污染全局作用域
            -  @babel-runtime 
                - 解决preset-env的全局污染
                - 手动按需加载腻子
                ```js
                import Promise from 'babel-runtime/core-js/promise';
                const p = new Promise(()=> {

                });
                console.log(p);
                ``` 
            -  @babel-plugin-transform-runtime
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
                        - 移除局部的babel helpers 引用 babel-runtime/helpers
                    - regenerator
                        - false 使用的是全局的regeneratorRuntime
                        - true 使用的是自定义runtime
            -  polyfill-service 
                - https://polyfill.io/v3/
            - 基本解析配置
                - preset
            - 装饰器语法支持
                - @babel/plugin-proposal-decorators
                - @babel/plugin-proposal-class-propertiess
                    - loose严格模式 ，定义属性的方式不同
            - 兼容性polify vs runtime
                - polyfill(腻子)，会直接在全局对象的原型上添加属性，造成全局污染，开发业务常用
                - runtime 重新构建新原生的对象，体积较大，开发第三方库常用

        - 

        

    - babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
    - style-loder css-loader sass-loader sass post-loader

    - 代码格式化
        - npm install prettier -D --save-exact
            - https://glebbahmutov.com/blog/configure-prettier-in-vscode/
        - json 
            - 文件提示 
            - https://github.com/schemastore/schemastore/#contribute
            - https://cloud.tencent.com/developer/article/1633934

# 组件开发流程

# 组件文档生产

# CI/CD
