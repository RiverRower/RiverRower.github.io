---
title: CSS
icon: laptop-code
category:
  - web
---

## 一，CSS初识
### 1.1，概念
CSS(Cascading Style Sheets)，通常称为CSS样式表或层叠样式表(级联样式表)
### 1.2，作用
1. 主要用于设置HTML页面中的文本内容(字体、大小、对齐方式等)、图片的外形(宽高、边框样式、边距等)以及版面的布局和外观显示样式
2. CSS以HTML为基础，提供了丰富的功能，如字体、颜色、背景的控制及整体排版等，而且还可以针对不同的浏览器设置不同的样式
## 二，引入CSS样式表（书写位置）
### 2.1，行内式（内联样式）
```html
<标签名 style="属性1:属性值1; 属性2:属性值2;...">内容</标签名>
```
注意：
- style其实就是标签的属性
- 样式属性和值中间是`:`
- 多组属性值之间用`;`隔开
- 只控制当前的标签和以及嵌套在其中的子标签，造成代码冗余
  **缺点：**
- 没有实现样式和结构相分离
### 2.2，内部样式表（内嵌样式表）
```html
<head>
	<style type="text/css">
		选择器 {
			属性1:属性值1;
			属性2:属性值2;
			...
		}
	</style>
</head>
```
注意：
- style标签一般位于head标签中，当然理论上可以放在html文档的任何地方
- type="text/css" 在html5中可以省略
- 只能控制当前的页面
  **缺点：**
- 没有切底分离
### 2.3，外部样式表（外链表）
概念：
- 称链入式
- 是将所有的样式放在一个或多个以.css为扩展名的外部样式表文件中
- 通过link标签将外部样式表文件链接到html文档中
  语法：
```html
<head>
	<link rel="stylesheet" type="text/css" href="css文件路径">
</head>
```
注意：
- link是单标签
- link标签需要放在head头部标签中，并且指定link标签的三个属性

|                  属性                 | 作用                                                                                               |
|:-------------------------------------:|----------------------------------------------------------------------------------------------------|
|                  rel                  | 定义当前文档与被链接文档之间的关系，在这里需要指定为"stylesheet"，表示被链接的文档是一个样式表文件 |
|                  type                 | 定义所链接文档的类型，在这里需要指定为"text/css"，表示链接的外部文件为CSS样式表。我们都可以省略    |
|                  href                 | 定义所链接外部样式表文件的url，可以是相对路径，也可以是绝对路径                                    |
## 三，CSS基础选择器
### 3.1，标签选择器
概念：
- 标签选择器(元素选择器)：指用html标签名称作为选择器，按标签名称分类，为页面中某一类标签指定统一的css样式
  语法：
- 标签名 {属性:属性值;}
  作用：
- 标签选择器可以把某一类标签全部选择出来
  优点：
- 能快速为页面中同类型的标签统一样式
  缺点：
- 不能设计差异化样式
### 3.2，类选择器
概念：
- 类选择器使用"."进行标识，后面紧跟类名
  语法：
```html
<!-- 类名选择器 -->
.类名 {		
	属性:属性值;
	...
}
<!-- 标签 -->
<p class="类名"></p>
```
优点：
- 可以为元素对象定义单独或相同的样式，可以选择一个或者多个标签
  注意：
1. 类选择器使用"."进行标识，后面紧跟类名
2. 长名称或词组可以使用横线来为选择器命名
3. 不要纯数字、中文等命名，尽量使用英文字母来标识
   特殊用法——多类名：
- 可以给标签指定多个类名，从而达到更多的选择目的，例：class="a b c d"
### 3.3，id选择器
语法：
```html
<!-- id选择器，使用#进行标识，后面紧跟id名 -->
#id名 {属性:属性值;}

<!-- 标签 -->
<p id="id名"></p>

<!--
元素的id值要唯一，只能对应于文档中某一个具体的元素
用法基本和类选择器相同
-->
```
id选择器和类选择器的区别：
- w3c标准规定，在同一个页面中，不允许由相同名字的id对象出现，但是允许相同名字的class
### 3.4，通配符选择器
概念：
- 通配符选择器用`*`号标识，`*`就是选择所有的标签，他是所有选择器中作用范围最广的，能匹配页面中所有的元素
  语法：
- `*` {属性:属性值;}
  注意：
- 会匹配页面所有的元素，降低页面响应速度，不建议随便使用
### 3.5，后代选择器
概念：
- 后代选择器又称包含选择器，用来选择元素或元素组的子孙后代
  语法：
- 当标签发生嵌套时，内层标签称为外层标签的后代
```css
/* 父级  子级 {属性:属性值;} */
.class h3 {color:red;}
```
### 3.6，子元素选择器
概念：
- 子元素选择器只能选择作为某元素子元素的元素
  语法：
- 写法就是把父级标签写在前面，子级标签写在后面，中间跟一个 > 进行连接
```css
.class>h3 {color:red;}
```
### 3.7，交集选择器
概念：
- 交集选择器由两个选择器构成，找到的标签必须满足：既有标签一的特点，也有标签二的特点
  语法：
- 其中第一个为标签选择器，第二个为class或id选择器，两个选择器之间不能有空格
```css
h3.class {color:red;}
```
### 3.8，并集选择器
概念：
- 并集选择器(CSS选择器分组)，是各个选择器通过 , 来凝结而成的，通常用于集体声明，让代码更简洁
  语法：
- 任何形式的选择器，都可以作为并集选择器的一部分
```css
.class, h3, p {color: red;}
```
### 3.9，链接伪类选择器
作用：
- 用于向某些选择器添加特殊的效果
  语法：

|    语法     | 注释       |
| :-------: | -------- |
|  a:link   | 未访问的链接   |
| a:visited | 已访问的链接   |
|  a:hover  | 鼠标移动到链接上 |
| a:active  | 选定的链接    |
注意：
- 写的时候，顺序尽量不要颠倒，按照lvha的顺序，否则可能引起错误
- 因为叫链接伪类，都是利用交集选择器
## 四，font属性
