const path = require('path')
const fs = require('fs')
//注意 一个../ 会抵消前面一层的路径
// const pathStr = path.join('/a','/b/c','../','./d','e')
// console.log(pathStr); // a\b\d\e

fs.readFile(path.join(__dirname,'/files/01.txt'),'utf-8',function(err,dataStr){
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})


