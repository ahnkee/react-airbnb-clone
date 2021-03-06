module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        useBuiltIns: false,
        debug: false,
      },
    ],
    ['@babel/preset-stage-2', { decoratorsLegacy: true }],
  ],
};
