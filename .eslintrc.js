module.exports = {
  'root': true,
  'parserOptions': {
    // 'parser': 'babel-eslint',
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'env': {
    'browser': true
  },
  'globals': {
    'httpVueLoader': true,
    'marked': true,
    'SmoothScroll': true
  },
  'extends': [
    'tjw-base',
    'tjw-jest',
    'tjw-vue'
  ],
  'rules': {
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'never'
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 0
  }
};
