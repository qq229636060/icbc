module.exports = {
  lintOnSave: false,
  publicPath:'./',
   devServer: {
    proxy: {
      '/home': {
        target:'http://43.242.75.65/home', //对应自己的接口
        changeOrigin: true,
        ws: true,
         pathRewrite: {
          '^/home':''
        }
      }
    }
  }
}