module.exports = {
  lintOnSave: false,
  publicPath:'./',
   devServer: {
    proxy: {
      '/api': {
        target:'http://150.242.98.114:8080/api', //对应自己的接口
        changeOrigin: true,
        ws: true,
         pathRewrite: {
          '^/api':''
        }
      }
    }
  }
}