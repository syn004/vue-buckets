const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const configuration = {
  build: {
    outputDir: 'build'
  },
  common: {
    assetsDir: 'static'
  },
  index: {
    indexPath: 'build/'
  },
  isHasHash: {
    filenameHashing: true
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'website' : '/',
  outputDir: configuration.build.outputDir,// 输出目录
  assetsDir: configuration.common.assetsDir,// 放置生成的静态资源(css,js,img,fonts)
  indexPath: configuration.index.indexPath,// build以后的index.html的路径
  filenameHashing: configuration.isHasHash.filenameHashing,// build以后的文件名是否有hash值
  lintOnSave: process.env.NODE_ENV !== 'production',//lint 错误在开发时直接显示在浏览器中
  chainWebpack: config => {
    config.resolve.alias
    .set('pages', resolve('src/pages'))
    .set('components', resolve('src/components'))
    .set('util', resolve('src/util'))
    .set('common', resolve('src/common'))
    .set('api', resolve('src/api'))
  }
}