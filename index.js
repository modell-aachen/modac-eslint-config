module.exports = {
    root: true,
    env: {
        'node': true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        '@vue/typescript',
    ],
    parserOptions: {
        'parser': '@typescript-eslint/parser',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': { 'allowExpression': true },
        '@typescript-eslint/explicit-member-accessibility': ['error', {
            'accessibility': 'no-public'
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': { 'delimiter': 'comma', 'requireLast': true },
            'singleline': { 'delimiter': 'comma', 'requireLast': false }
        }],
        '@typescript-eslint/no-use-before-define': [0],
        "@typescript-eslint/semi": ["error"],
        'brace-style': [1],
        'callback-return': [2, ['callback', 'cb', 'next', 'done', 'proceed']],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-style': [2, 'last'],
        'curly': [2],
        'eol-last': [1],
        'eqeqeq': [2, 'smart'],
        'handle-callback-err': [2],
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'keyword-spacing': [0],
        'linebreak-style': [2, 'unix'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-duplicate-imports': [2, { 'includeExports': true }],
        'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
        'no-return-assign': [2, 'always'],
        'no-sequences': [2],
        'no-trailing-spaces': [2],
        'no-undef': [0],
        'no-unexpected-multiline': [1],
        'no-var': [1],
        'one-var': [2, 'never'],
        'semi': "off",
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        'vue/html-indent': ['error', 4],
    }
};
