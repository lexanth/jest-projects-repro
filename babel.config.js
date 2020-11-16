module.exports = (api) => ({
  presets: [
    [
      require('@babel/preset-env'),
      { useBuiltIns: 'usage', corejs: { version: 3 } },
    ],
    [
      require('@babel/preset-react'),
      { useBuiltIns: true, development: api.env(['development', 'test']) },
    ],
  ],
})
