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
    '@store': path.resolve(__dirname, 'src/store'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@router': path.resolve(__dirname, 'src/router')
  }),
  fixBabelImports('import', {                      // 按需加载antd
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
