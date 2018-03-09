// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [2, 2],
    // "quotes": [2, "single"],
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-spaced-func": 2,//函数调用时，函数名和括号之间不能有空格
    "no-trailing-spaces": 1,//禁止行每行末尾加空格
    "no-unneeded-ternary": 1,//禁止使用没有必要的三元操作符
    "object-curly-spacing": [2, "never"],//大括号内部是不加空格
    "no-trailing-spaces": 2,
    "comma-dangle": [2, "never"],
    "comma-spacing": [1, {"before": false, "after": true}],
    "comma-style": [1, "last"],//默认配置逗号应该放在行末
    "consistent-this": [2, "that"],//制定this对象的别名
    "no-constant-condition": 2,//条件语句中使用常量语句时就会抛出错误
    "no-dupe-keys": 2,//不能够使用相同的键名
    "no-duplicate-case": 2,//在switch语句中，禁止使用相同的case值。
    "no-empty": 2,//空语句
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "no-undef": 2,//不能有未定义的变量
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-unreachable": 2,//不能有无法执行的代码
    "no-use-before-define": 2,//未定义前不能使用
    "default-case": 2,//switch语句最后必须有default
    "no-extra-boolean-cast": 2,//消除本来不需要使用两个!! 来转化布尔值的情况
    "no-extra-semi": 2,//限制使用多余的分号
    "use-isnan": 2,//不要和NaN做比较
    "curly": 0,//所有的代码块语句需要被大括号包围
    // "no-caller": 0,//代码中不使用 arguments.caller or arguments.callee
    "no-eq-null": 2,//和null 比较时使用=== 和 !==
    "no-eval": 2,
    "no-redeclare": 2,//避免重复申明一个变量
    "no-undefined": 2,//禁止把undefined作为变量名
    "valid-typeof": 2,//保证typeof 操作符返回的结果必须和"undefined",  "object",  "boolean", "number", "string", 和  "function"作比较
    "no-mixed-spaces-and-tabs": [2, false]
  }
}
