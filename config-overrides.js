const path = require('path')
const rimraf = require('rimraf')
const {
  override,
  useBabelRc,
  removeModuleScopePlugin,
  addWebpackAlias,
} = require('customize-cra')

module.exports = {
  webpack: override(
    useBabelRc(),
    removeModuleScopePlugin(),
    addWebpackAlias({
      '~/assets': path.resolve(__dirname, 'src/assets'),
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/pages': path.resolve(__dirname, 'src/pages'),
      '~/layouts': path.resolve(__dirname, 'src/layouts'),
      '~/styles': path.resolve(__dirname, 'src/styles'),
    })
  ),
}
