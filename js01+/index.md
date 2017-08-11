1. 网页设计   ：制作静态网页
html: 超文本标签语言，负责网页中的内容部分
css: 层叠样式表，负责网页的美化
js: 制作JAVA脚本，负责页面的动画
2. jsp：制作动态网页
静态网站不可以访问数据库
动态网站可以访问数据库
3. html中的内容：（标签不区分大小写）
块级标签：
  h1-h6 ----标题标签
  p---段落标签
  ul,li-----无序列表
  ol,li-----有序列表
  table,tr,td-----td不算行级标签
  form------表单标签
  div-------层标签
  dl,dt,dd----定义描述标签
行级标签：
  img-------图像标签
  a---------超链接标签
  span------范围标签
  br--------换行标签
  input-----输入标签，此标签有10个不同种类的类型
  select,option-----下拉列表
  textarea-----文本域
  iframe-----内嵌框架


------
## css层叠样式表
### 三种选择器
标签选择器，类选择器，Id选择器
### 常用的css属性
1. 文本属性：font-size,font-family,color,text-align,line-height,text-decoration,
2. 背景属性：background-image,background-repeat,background-position,background-color
3. 列表属性：list-style,float
4. 盒子模型：内容，边框，内边距，外边距

------

## JS

### 作用：
1. 表单验证
2. 页面动画效果
3. 动态改变页面内容

vue.js直接可以开发Android的apk


### JS与JAVA不同点
1. 所属公司不同
2. js是基于对象(把标签看作一个对象)和事件驱动（基于Java中的监听事件），java是面向对象
3. js是解释型语言，Java是编译执行
4. JS是弱类型语言，JAVA是强类型语言

### JS组成
1. ECMAscript ECMA表示欧洲计算机协会
2. BOM  浏览器对象模型
3. DOM  文档对象模型

### ECMAscript
#### 数据类型：
可以通过typeof()来返回变量的类型
undefined boolean String number Object

声明一个变量（可以通过var声明，也可以直接赋值，有区别）
var

  1.  写在函数里面，带了var的变量是局部变量，但是在函数外面没有差别
  2.  == 只比较内容是否相等不管数据类型，===是恒等于，不仅判断内容，还判断数据类型，类似于 != !==
  3.  逻辑运算符，


#### Js中表示逻辑假
0 null NaN undefined 空字符串("",'') false

#### 语法约定
1. 区分大小写
2. 分号
3. 变量，函数以及对象的名称

练习：自己写网页版本的计算器
