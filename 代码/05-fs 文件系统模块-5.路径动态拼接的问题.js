
//直接提供绝对路径
//注意    在js中 \ 代表转义    \\ 这个才是路径 不要嫌麻烦
//移植性非常差！不利于维护


// fs.readFile('C:\\Users\\31569\\Desktop\\Front_end\\第三阶段：服务端编程\\3. node.js\\代码\\files\\01.txt','utf-8',function(err,dataStr){
//     if(err){
//         console.log('读取文件失败！'+err.message);
//     }
//     console.log('读取文件成功！'+dataStr);
// })

// __dirname 表示当前文件所处的目录
const fs = require('fs')
fs.readFile(__dirname+'/files/01.txt','utf-8',function(err,dataStr){
    if(err){
        console.log('读取文件失败！'+err.message);
    }
    console.log('读取文件成功！'+dataStr);
})

