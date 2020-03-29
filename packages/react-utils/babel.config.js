module.exports = {
  sourceMaps: true,

  // Additional comments can be found in source map and type definitions.
  comments: false,

  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      shippedProposals: true,
    }],
  ],

  env: {
    node: {
      presets: [
        ['@babel/preset-env', {
          modules: 'commonjs',
          targets: {
            node: 10,
          },
        }],
      ],
    },

    browser: {
      presets: [
        ['@babel/preset-env', {
          modules: 'umd',
          targets: {
            browsers: '> 0.25%, ie >= 11, not dead',
          },
        }],
        'babel-preset-minify',
      ],
    },

    module: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          bugfixes: true,
          targets: {
            esmodules: true,
          },
        }],
      ],
    },
  },
};
