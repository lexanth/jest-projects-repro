module.exports = {
  transform: {
    '\\.[jt]sx?$': require.resolve('./jest-transform-src'),
  },
}
