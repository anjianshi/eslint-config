# 公共 ESLint Rules

Rules 文件及依赖关系：
```
base             基础 JavaScript 语法规则
typescript       TypeScript 规则
react            React App 规则（包含 base 和 typescript）
node             Node.js 环境下的规则（包含 base）
node-typescript  Node.js 环境下书写 TypeScript 的规则（包含 base、node 和 typescript）
```


## 如何使用

### 安装
```sh
yarn add --dev typescript eslint @anjianshi/eslint-config
```

### 配置 eslint config
例如在 `.eslintrc.js` 中：

```js
module.exports = {
  extends: [
    '@anjianshi/eslint-config/react'
  ]
}
```

### 配置 TypeScript 规则
如果使用了 `@anjianshi/eslint-config/typescript`，或引用了它的规则文件，  
要求当前 ESLint 配置文件的同级目录里有一个 `tsconfig.json`。

如果这个文件在别的位置，需要在配置文件里指明：
```js
module.exports = {
  extends: [
    '@anjianshi/eslint-config/typescript'
  ],
  parserOptions: {
    project: './src/tsconfig.json',
  },
}
```

### resolve alias
Webpack 里配置了 resolve alias 时，ESLint 里也需要相应配置才能正确校验 import 行为。
具体办法是在 `.eslintrc.js` 里加上一段：
```js
{
  'settings': {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js 文件路径',
      },
    },
  }
}
```

以上行为需要 `eslint-import-resolver-webpack` 这个依赖，  
此包已将它引入进来（虽然这个包自己用不到），无需再次引入。


### VSCode 下正确配置 ESLint

一、安装 VSCode 插件 `ESLint`

二、修改 VSCode 设置（Code - Preferences - Settings）
```js
{
  "editor.tabSize": 2,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
  ],
}
```

三、设置 ESLint workingDirectories（可选）
若 VSCode 的 workspace 配置成类似如下目录结构：
```js
projects/     // /Users/me/office/projects/
  proj-1/
  proj-2/
  ...

library/      // /Users/me/library/
  lib-1/
  lib-2/
```
也就是，workspace 下添加了多个独立的文件夹，每个独立文件夹下又有多个项目。
在开发这些项目（`proj-1`、`lib-1`...）时，ESLint 默认会把顶层目录作为 `workingDirectory`，从那个目录下加载插件等依赖，导致找不到依赖。
此时我们可以在这些顶层目录下创建一个 `.vscode/setting.json` 文件，写入如下内容：
```json
{
  "eslint.workingDirectories": [
    { "mode": "auto" }
  ]
}
```
这样 ESLint 会改为把 `package.json` 存在的目录作为 `workingDirectory`，也就能正常引入依赖了。
