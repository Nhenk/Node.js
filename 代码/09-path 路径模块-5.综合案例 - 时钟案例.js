//步骤1 - 导入需要的模块并创建正则表达式

//导入 fs 模块
const fs = require('fs')
const { resolve } = require('path')
//导入 path 模块
const path = require('path')
//定义正则表达式 分别匹配 <style></style> 和 <script></script> 标签
//其中 \s 表示空白字符 \S 表示非空白字符 *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//步骤2 - 使用 fs 模块读取需要被处理的 html 文件
fs.readFile(path.join(__dirname,'./files/index.html'),'utf-8',function(err,dataStr){
    //读取 HTML 文件失败
    if(err) return console.log('读取HTML文件失败!'+err.message);
    //读取 HTML 文件成功后，调用对应的方法，拆解出 css , js 和 html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//定义处理 css 样式的方法
//步骤3 - 自定义 resolveCSS 方法
function resolveCSS(htmlStr) {
    //使用正则提取需要的内容
    //exec() 方法用于检索字符串中的正则表达式的匹配 要么为数组要么为null
    const r1 = regStyle.exec(htmlStr)
    //将提取出来的样式字符串，字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCSS);
    //调用fs.writeFile()方法，将提取的样式，写到 clock 目录中 index.css 文件中
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err) return console.log('写入样式失败!'+err.message);
    })
    console.log('写入css文件成功!');
}

//定义处理 js 脚本的方法
//步骤4 -自定义 resolveJS 方法
function resolveJS(htmlStr) {
    //使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    //将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    //将处理的结果，写入导clock目录中的index.js文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err) return console.log('写入JavaScript 脚本失败!'+err.message);
        console.log('写入JS脚本成功!');
    })

}

//定义处理 HTML 结构的方法
//步骤5 – 自定义 resolveHTML 方法 
function resolveHTML(htmlStr) {
    //将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle,' <link rel="stylesheet" href="./index.css "> ').replace(regScript,'<script src="./index.js"></script>')
    //将newHTML写入 index.html 这个文件中
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err) return console.log('写入 HTML 文件失败! '+err.message);
        console.log('写入 HTML 文件成功! ');
    })
}

