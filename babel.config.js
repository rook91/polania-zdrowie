module.exports = {
  env: {
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/react',
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env', { modules: 'commonjs' }],
        '@babel/react',
      ],
    },
    production: {
      presets: [
        ['minify'],
        ['@babel/preset-env', { modules: false }],
        '@babel/react',
      ],
    },
  },
};
