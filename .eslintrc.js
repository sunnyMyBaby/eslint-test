module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  extends: [
    // 继承的规则 [扩展]
    'eslint-config-airbnb',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'], // 插件
  rules: {
    'no-alert': 2, // 不使用alert
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.md'] }], // 允许tsx、jsx混用
    'import/extensions': 0, // import 忽略后缀迷名
    'import/no-unresolved': 0, // eslint不识别webpack别名
    '@typescript-eslint/no-unused-vars': 2, // 声明了不实用的变量
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'class-methods-use-this': 0,
    // 'func-names': 0,
    // 'react/sort-comp': 0,
    // 'react/prop-types': 0,
    // 'react/jsx-first-prop-new-line': 0,
    // 'no-param-reassign': 0,
    // 'no-return-assign': 0,
    // 'max-len': 0,
    // 'react/no-multi-comp': 0,
    // 'array-callback-return': 0,
    // 'jsx-a11y/img-has-alt': 0,
    // 'import/extensions': 0,
    // 'import/no-extraneous-dependencies': 0,
    // 'react/no-string-refs': 0,
    // 'react/no-array-index-key': 0,
    // 'react/no-find-dom-node': 0,
    // 'react/require-extension': 0,
    // 'jsx-a11y/anchor-has-content': 0,
    // 'jsx-a11y/href-no-hash': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'prefer-destructuring': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'react/jsx-no-comment-textnodes': 0,
    // 'object-curly-newline': 0,

    // '@typescript-eslint/no-explicit-any': 0,
    // 'react/static-property-placement': 0,
    // 'no-unused-expressions': 0,
    // 'react/prefer-stateless-function': 0,
    // 'no-sequences': 0,
    // 'consistent-return': 0,
    // 'no-console': 1,
    // '@typescript-eslint/no-empty-function': 0,
  },
}
