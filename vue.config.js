// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('css')
//       .test(/\.css$/)
//       .oneOf('vue')
//       .resourceQuery(/\?vue/)
//       .use('px2rem')
//       .loader('px2rem-loader')
//       .options({
//         remUnit: 75
//       })
//   }
// }


module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }

  },
  lintOnSave: false    //忽略eslint检查
}