# Angular 1.x + WebPack + ES6/ES7 +  Babel 

Build an Angular 1.x application using WebPack


## Features

* 使用合理的默认值对 Webpack进行配置
* 支持 ES6, ES7 支持

* ------------ 待完善 ------------------

* 在开发服务器在可能的情况下进行热重载，否则进行刷新
* 开发，生产环境支持 source maps
* 使用Karma和Jasmine来进行ng模块的单元测试
* 运行测试时的代码覆盖率


## Installation

To use it, just clone this repo and install the npm dependencies:

```text

shell

$ git clone https://github.com/XiaoLiz/webpack-Angularjs1.x.git

$ cd webpack-Angularjs1.x

$ npm install or yarn install 

```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - webpack build production environment
* `dev` - start development server, try it by opening 	`http://localhost:8080/`


See what each script does by looking at the `scripts` section in [package.json](./package.json).


## 参考案例

To see how to structure an Angular 1.x application using this workflow, please check [this demo](https://github.com/Foxandxss/GermanWords-ng1-webpack).
