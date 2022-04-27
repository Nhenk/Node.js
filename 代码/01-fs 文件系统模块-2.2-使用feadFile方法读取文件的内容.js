//导入 fs 模块 来操作文件
const fs = require('fs')
//调用fs.readFile() 方法读取文件
//参数一：读取文件的存放路径
//参数二：读取文件的时候采用的编码格式。默认指定 utf8
//参数三：回调函数，可以拿到失败和成功的结果 ，err dataStr
fs.readFile('./files/01.txt','utf-8',function(err,dataStr){
    //打印失败的结果
    //如果读取成功 则err的值为null
     //如果读取成功 则err的值为 错误对象 dataStr 的值为 underfined
console.log(err);
console.log('---------');
    //打印成功的结果
console.log(dataStr);
})
