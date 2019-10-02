module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  // "globals": {
  //   "$": true,
  //   "process": true,
  //   "__dirname": true
  // },
  // "parser": "babel-eslint",
  'rules': {
    "indent": ["error", 2, { "SwitchCase": 1 }], //空格2个
    "no-var": 2, //对var警告
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-console": 1, //禁用console,worning
    "no-debugger": 2, //禁用debugger
    "newline-before-return": 2,//return前需要空行
    "semi-spacing": [2, {"before": false, "after": true}],//分号前后空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "prefer-const": 2,//首选const
    "space-before-function-paren": [2, "never"],//函数定义时括号前面要不要有空格
    "space-before-blocks": 2, //强制在块之前使用一致的空格
    "comma-spacing": 2, //强制在逗号前后使用一致的空格
    "no-plusplus": 2, //禁止使用一元操作符 ++ 和 –
    "space-infix-ops": 2, //要求操作符周围有空格
    "spaced-comment": 2, //强制在注释中 // 或 /* 使用一致的空格
    "no-multi-spaces": 2, //禁止使用多个空格
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "quotes": [2, "single"], //单引号
    "no-irregular-whitespace": 2, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "eol-last": 2, //文件以单一的换行符结束
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  }
};