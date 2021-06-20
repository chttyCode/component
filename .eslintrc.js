module.exports = {
  parser: "@typescript-eslint/parser", // 指定ESLint解析器
  parserOptions: {
    ecmaVersion: 2020, // 允许解析2020 ECMAScript特性
    sourceType: "module", // 允许使用导入
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
  },
  settings: {
    react: {
      version: "detect", //  自动检测react版本
    },
  },
  extends: [
    "plugin:react/recommended", // 使用@eslint-plugin-react推荐的规则
    "plugin:@typescript-eslint/recommended", // 使用@typescript-eslint/eslint-plugin推荐的规则
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    // 放置来指定ESLint规则。可用于覆盖从扩展配置中指定的规则
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
