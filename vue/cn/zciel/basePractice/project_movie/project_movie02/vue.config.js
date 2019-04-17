const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias  /** 设置别名 */
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件 加快打包的速度
  productionSourceMap: false
  /*devServer: {  //跨域
    proxy: 'http://localhost:3000' //都有匹配的都会走这个位置
  }*/
}
