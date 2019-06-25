## Mobx-basic 

####安装
`yarn add mobx mobx-react`

#### 启用修饰器  babel 支持ES7中的修饰器语法@

1. `yarn eject` 打开配置

1. 安装babel 依赖

`yarn add babel-plugin-transform-decorators-legacy --dev`

`yarn add @babel/plugin-proposal-decorators`

3. 配置webpack

```json
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
```





