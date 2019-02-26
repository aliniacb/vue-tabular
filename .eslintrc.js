module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        // indentation 4 spaces
        'indent': ['error', 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,

        // allow async-await
        'generator-star-spacing': 0,

        // space after function parantheses
        'space-before-function-paren': ['error', 'never'],
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
