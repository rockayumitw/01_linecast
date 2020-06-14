const webpack = require('webpack')
// const path = require('path')

module.exports = {
  // publicPath=>發佈的資源路徑 ./=>為相對路徑  /=>絕對路徑用於本地端file://訪問
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  outputDir: '../www/linecast', // 輸出檔案資料夾為dist 默認建構前先清除資料夾, --no-clean關閉清除
  assetsDir: 'static', // 放置生成靜態資源(js.css.img.fonts) 相對於 (outputDir)的目錄
  // indexPath:'index.html', //生成的index.html輸出路徑(相對於outputDir),也可以是一個絕對路徑
  // filenameHashing:true,   //生成的靜態資源文件名中包含了hash以便更好控制緩存
  // output:{
  //   path:this.configureWebpack.build.assetsRoot,
  //   filename:utils.assetsPath()
  // },
  devServer: { // 模擬資料
    // public:'127.0.0.1:5500',
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',  //0.0.0.0 為localhost
    // port: 8080,
    // https: false,    //是否開啟協議,開啟會發出警告
    // hotOnly: false,  //
    // proxy:false,
    // proxy:{
    //   '/api':{ //配置跨域
    //     target:'http://127.0.0.1:5500',
    //     ws:true,
    //     changOrigin:true,
    //     pathRewrite:{
    //       '^/api':'',
    //     }
    //   }
    // },

  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
