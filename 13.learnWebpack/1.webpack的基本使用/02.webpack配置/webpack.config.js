const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname,'dist'),//动态获取绝对路径 __dirname是一个全局变量
    filename : 'bundle.js'
  }
}