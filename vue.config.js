const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit : 37.5 //设计稿10等分之后的值，这样就不用自己计算rem,直接写量出来的px即可
})
// vue.config.js
module.exports = {
  // Ñ¡Ïî...
  runtimeCompiler:true,//使组件可以使用template
  lintOnSave:false,//关闭eslint语法检查，写一段时间记得打开让他检查，不能一直关
  css:{//添加postcss的配置
    loaderOptions:{
      postcss:{
        plugins:[
          postcss
        ]
      }
    }
  },
  devServer : {
    proxy : {
      '/api' :{
        target : 'http://localhost:4000',
        ws : true,
        changOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
}