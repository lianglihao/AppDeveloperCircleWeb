const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
  fixBabelImports
} = require('customize-cra')

const path = require('path')

module.exports = override(
  addDecoratorsLegacy(),                           // 使用mobx
  addWebpackAlias({                                // 配置路径
    '@': path.resolve(__dirname, 'src/'),
    '@store': path.resolve(__dirname, 'src/store')
  }),
  fixBabelImports('import', {                      // 按需加载antd
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)
