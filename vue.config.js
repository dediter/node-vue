/*
* baseUrl './',  ./或''为相对路径用在类似 Cordova hybrid 应用的文件系统中，
  使用history路由或多页面应用是避免使用
* outputDir: 'dist',  //打包的目录
* assetsDir:  '', //静态资源的目录(相对于outputDir)
* indexPath: 'index.html' 指定生成的 index.html 的输出路径(相对于 outputDir)
* filenameHashing: true  默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
     然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
    如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
* pages:{} //多页应用时使用  一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)或一个指定其 entry 的字符串
*
*
*/

module.exports = {
    /*baseUrl: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'*/
    /*pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js'
    }*/

    devServer:{
        //proxy: 'http://localhost:4000'//后端api服务器
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}