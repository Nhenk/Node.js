//1.导入 fs 文件系统模块
const fs = require('fs')
//2.调用fs.writeFile() 方法，写入文件的内容
//参数1：表示文件的存放路径
//参数2：表示要写入的内容
//参数三：回调函数
//下面代码在function之前省略了一个编码格式
fs.writeFile("./files/01.txt","abcd",function(err){
    //如果文件写入成功，则err的值为null
    //如果写入失败，则err的值等于一个 错误对象
    //console.log(err);
    if(err){
        return console.log('文件写入失败!'+err.message);
    }
    console.log('文件写入成功!');
})