# Node.js





## 初识 Node.js





### 1. 回顾与思考





####  ① 已经掌握了哪些技术

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242208425.png)

#### ② 浏览器中的 JavaScript 的组成部分

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242214284.png)

#### ③ 思考：为什么 JavaScript 可以在浏览器中被执行

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242214482.png)

#### ④ 思考：为什么 JavaScript 可以操作 DOM 和 BOM

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242214970.png)

#### ⑤ 浏览器中的 JavaScript 运行环境

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242215208.png)

#### ⑥ 思考：JavaScript 能否做后端开发

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242216849.png)





### 2. Node.js 简介





#### ① 什么是 Node.js

Node.js® is a ==JavaScript runtime== built on Chrome's V8 JavaScript engine.
[Node.js](https://nodejs.org/zh-cn/) 是一个基于 Chrome V8 引擎的 ==JavaScript 运行环境== 。

Node.js 的官网地址： https://nodejs.org/zh-cn/





#### ② Node.js 中的 JavaScript 运行环境

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204242218659.png)

注意：

+ **浏览器**是 JavaScript 的**前端运行环境** 。
+ **Node.js** 是 JavaScript 的**后端运行环境** 。
+ Node.js 中**无法调用** DOM 和 BOM 等**浏览器内置 API** 。





#### ③ Node.js 可以做什么

Node.js 作为一个 JavaScript 的运行环境 ，仅仅提供了基础的功能和 

API 。然而，基于 Node.js 提供的这些基础功能，很多强大的工具和框

架如雨后春笋，层出不穷，所以学会了 Node.js ，可以让前端程序员胜

任更多的工作和岗位：

+ 基于 Express 框架（http://www.expressjs.com.cn/），可以快速构

  建 Web 应用

+ 基于 Electron 框架（https://electronjs.org/），可以构建跨平台的

  桌面应用

+ 基于 restify 框架（http://restify.com/），可以快速构建 API 接口项目

+ 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…

总之：Node.js 是**大前端时代**的“大宝剑” ，有了 Node.js 这个超级 buff 

的加持，前端程序员的行业竞争力会越来越强 ！





#### ④ Node.js 好学吗

好学 ！
会 JavaScript，就能学会 Node.js ！！！





#### ④ Node.js 怎么学

浏览器中的 JavaScript 学习路径：

JavaScript 基础语法 + 浏览器内置 API（DOM + BOM） + 第三方库

（jQuery、art-template 等）



Node.js 的学习路径：

==JavaScript 基础语法== + **Node.js 内置 API 模块**（fs、path、http等）+ 

**第三方 API 模块**（express、mysql 等）







### 3. Node.js 环境的安装

如果希望通过 Node.js 来运行 Javascript 代码，则必须在计算机上安装 

Node.js 环境才行。

安装包可以从 Node.js 的官网首页直接下载，进入到 Node.js 的[官网](https://nodejs.org/en/)首

页，点击绿色的按钮，下载所需的版本后，

双击直接安装即可。

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204260919526.png)





#### ① 区分 LTS 版本和 Current 版本的不同

+ LTS 为长期稳定版，对于**追求稳定性**的**企业级项目**来说，推荐安装

  LTS 版本的 Node.js。

+ Current 为新特性尝鲜版，对**热衷于尝试新特性**的用户来说，推荐

  安装 Current 版本的 Node.js。但是，Current 版本中可能存在隐藏

  的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版

  本的 Node.js 。





#### ② 查看已安装的 Node.js 的版本号

打开**终端**，在终端输入命令 **node –v **后，按下回车键，即可查看已安装

的 Node.js 的版本号。

Windows 系统快速打开终端的方式：

使用快捷键（**Windows徽标键 + R**）打开运行面板，输入 **cmd** 后直接回

车，即可打开终端。





#### ③ 什么是终端

![](note images/00009.png)

终端（英文：Terminal）是专门为开发人员设计的，用于实现人机交互

的一种方式。

作为一名合格的程序员，我们有必要识记一些常用的终端命令，来辅助

我们更好的操作与使用计算机 。







### 4. 在 Node.js 环境中执行 JavaScript 代码

+ 打开终端
+ 输入 node **要执行的js文件的路径**





#### ① 终端中的快捷键

在 Windows 的 powershell 或 cmd 终端中，我们可以通过如下快捷键，

来提高终端的操作效率：

使用 **↑** 键，可以快速定位到上一次执行的命令

使用 **tab** 键，能够快速补全路径

使用 **esc** 键，能够快速清空当前已输入的命令

输入 **cls** 命令，可以清空终端

在空白处按住 shift 鼠标右键会出现 window terminal powershall





## fs 文件系统模块







### 1. 什么是 fs 文件系统模块



==fs 模块==是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列

的方法和属性，用来满足用户对文件的操作需求。

例如：

+ `fs.readFile()` 方法，用来**读取**指定文件中的内容
+  `fs.writeFile()` 方法，用来向指定的文件中**写入**内容

如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如

下的方式先导入它：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204261014840.png)







### 2. ==读取==指定文件中的内容





#### ①  fs.readFile() 的语法格式

使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204261015313.png)

参数解读：

path：必选参数，字符串，表示文件的路径。

options ：可选参数，表示以什么编码格式来读取文件。

callback：必选参数，文件读取完成后，通过回调函数拿到读取的结

果。





#### ② fs.readFile() 的示例代码

以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204261739307.png)





#### ③ 判断文件是否读取成功

可以判断 err 对象是否为 null，从而知晓文件读取的结果：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204261747120.png)







### 3. 向指定的文件中==写入内容==





#### ① fs.writeFile() 的语法格式

使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如

下：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262135595.png)

参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放

路径。

参数2：必选参数，表示要写入的内容。

参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。

参数4：必选参数，文件写入完成后的回调函数。





####  ② fs.writeFile() 的示例代码

向指定的文件路径中，写入文件内容：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262142768.png)





#### ③ 判断文件是否写入成功

可以判断 err 对象是否为 null，从而知晓文件写入的结果：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262145739.png)





### 4. 练习 - 考试成绩整理

核心实现步骤

+ 导入需要的 fs 文件系统模块
+ 使用 `fs.readFile()` 方法，读取素材目录下的 成绩.txt 文件
+ 判断文件是否读取失败
+ 文件读取成功后，处理成绩数据
+ 将处理完成的成绩数据，调用 `fs.writeFile()` 方法，写入到新文件 成绩-ok.txt 中

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262230661.png)







### 5. fs 模块 - 路径动态拼接的问题

在使用 fs 模块操作文件时，如果提供的操作路径是以` ./` 或 `../` 开

头的==相对路径==时，很容易出现路径动态拼接错误的问题。

原因：代码在运行的时候，**会以执行 node 命令时所处的目录**，动态

拼接出被操作文件的完整路径。

**解决方案**：在使用 fs 模块操作文件时，直接提供完整的路径，不要提

供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262230560.png)

下面是解决移植性的方案

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262236669.png)





## path 路径模块





### 1. 什么是 path 路径模块

==path 模块==是 Node.js 官方提供的、用来==处理路径==的模块。它提供了

一系列的方法和属性，用来满足用户对路径的处理需求。

例如：

+ `path.join()` 方法，用来将**多个路径片段拼接成一个完整的路**

  **径字符串**

+ `path.basename()` 方法，用来从路径字符串中，将文件名解析出来

如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如

下的方式先导入它：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262240891.png)





### 2. 路径拼接





#### ① path.join() 的语法格式

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262242450.png)

参数解读：
...paths `<string> `路径片段的序列
返回值:` <string>`





#### ② path.join() 的代码示例

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262301685.png)

注意：**今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法**进行处理。不要直接使用 + 进行字符串的拼接。





### 3. 获取路径中的文件名





#### ① path.basename() 的语法格式

使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过

这个方法获取路径中的文件名，语法格式如下：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262307789.png)

参数解读：
path  `<string>` 必选参数，表示一个路径的字符串
ext  `<string>` 可选参数，表示文件扩展名
返回: `<string>` 表示路径中的最后一部分

注意：[ ] 仅仅表示这个参数是个可选参数





#### ② path.basename() 的代码示例

使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分 ：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204262313838.png)





### 4. 获取路径中的文件扩展名





#### ① path.extname() 的语法格式

使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204270916619.png)

参数解读：
path `<string>`必选参数，表示一个路径的字符串
返回: `<string> `返回得到的扩展名字符串





#### ② path.extname() 的代码示例

使用 path.extname() 方法，可以获取路径中的扩展名部分：

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204270922062.png)







### 5. 综合案例 - 时钟案例





#### ① 案例要实现的功能

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204270925909.png)

将素材目录下的 index.html 页面，拆分成三个文件，分别是：

+ index.css

+ index.js

+ index.html

并且将拆分出来的 3 个文件，存放到 clock 目录中。





#### ② 案例的实现步骤

+ 创建两个正则表达式，分别用来匹配` <style> `和 `<script>` 标签

+ 使用 fs 模块，读取需要被处理的 HTML 文件
+ 自定义 resolveCSS 方法，来写入 index.css 样式文件
+ 自定义 resolveJS 方法，来写入 index.js 脚本文件
+ 自定义 resolveHTML 方法，来写入 index.html 文件





#### ③ 步骤1 - 导入需要的模块并创建正则表达式

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204271108904.png)





#### ③ 步骤2 - 使用 fs 模块读取需要被处理的 html 文件

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204271118159.png)





#### ③ 步骤3 – 自定义 resolveCSS 方法

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204271917461.png)





#### ③ 步骤4 – 自定义 resolveJS 方法 

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204271917233.png)



#### ③ 步骤5 – 自定义 resolveHTML 方法 

![](https://cdn.jsdelivr.net/gh/Nhenk/Nhenk-repository/202204271917378.png)





#### ④ 案例的两个注意点

fs.writeFile() 方法只能用来创建文件，不能用来创建路径（创建文件夹）
重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容



## http 模块