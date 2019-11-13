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
    'axios': true,
    'httpVueLoader': true,
    'marked': true,
    'jsdom': true,
    'Promise': true,
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
