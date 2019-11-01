const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname,'dist'),//动态获取绝对路径 __dirname是一个全局变量
    filename : 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,//正则表达式，找到匹配的CSS文件，应用下面2个loader
        //css-loader只负责加载；style-loader负责将样式旋绕到dom
        //webpack使用多个loader时，是从右向左读的。所以先 style-loader再css-loader
        //顺序乱了，在编译的时候报错
        use: [ 'style-loader','css-loader' ] //css-loader只负责加载
      }
    ]
  }
}