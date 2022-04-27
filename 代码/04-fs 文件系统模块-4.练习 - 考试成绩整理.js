//导入 fs 模块
const fs = require('fs')

//调用 fs.readFile() 读取文件的内容
fs.readFile('./files/02.成绩.txt','utf-8',function(err,dataStr){
    //判断是否读取成功
    if(err){
        return console.log('读取文件失败!'+err.message);
    }
    //console.log('读取文件成功！'+dataStr);


    //先把成绩的数据，按照 空格 进行分割
    const arrOld = dataStr.split(' ')
    //循环分割后的数组，对每一项数据，进行字符串操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=','：'))
    })
    console.log(arrNew);
    //把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    //调用 fs.writeFile() 方法 把处理完毕的数据 写入到新文件中
    fs.writeFile('./files/02.成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('写入文件失败！'+err.message);
        }
        console.log('成绩写入成功！');
    })
})