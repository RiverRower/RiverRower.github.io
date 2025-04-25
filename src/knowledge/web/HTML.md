---
title: HTML
icon: laptop-code
category:
  - web
---

## 一，HTML定义
1.1，定义：
HTML指的是超文本标记语言(Hyper Text Markup Language)是用来描述网页的一种语言。
HTML不是一种编程语言，而是一种标记语言(Markup Language)
标记语言是一套标记标签(markup tag)
1.2，作用：
网页由网页元素组成的，这些元素是利用html标签描述出来，然后通过浏览器解析，就可以显示给用户
1.3，超文本，有2层含义：
1. 因为它可以加入图片、声音、动画、多媒体等(超越文本限制)
2. 它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接(超级链接文本)
## 二，HTML模板
``` html
<!DOCTYPE html>	  <!-- 告知浏览器按照HTML5规范解析页面 -->
<html lang="en">  <!-- 指定html语言种类，en定义为英语；zh-CN定义为中文 -->
<html>
	<head>
	<!-- 计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字 -->
		<meta charset="UTF-8">	
		<titile>标题</title>
	</head>
	<body>
		内容
	</body>
</html>
```
## 三，常用标签
### 3.1，排版标签
1. 标题标签 h1 ~ h6
2. 段落标签 p
3. 水平线标签 hr
4. 换行标签 br
5. div 和 span 标签
### 3.2，文本格式化标签
|              标签               |   显示效果    |
| :---------------------------: | :-------: |
| `<b></b>`和`<strong></strong>` |  文字以粗体显示  |
|     `<i></i>`和`<em></em>`     |  文字以斜体显示  |
|    `<s></s>`和`<del></del>`    | 文字以加删除线显示 |
|    `<u></u>`和`<ins></ins>`    | 文字以加下划线显示 |
注：后一种标签相对于前一种标签，语义更强烈
### 3.3，图像标签 img
|   属性   |        属性值         |      描述       |
| :----: | :----------------: | :-----------: |
|  src   |        url         |     图像的路径     |
|  alt   |         文本         | 图像不能显示时的替代文本  |
| title  |         文本         |  图像悬停时显示的内容   |
| width  | 像素(XHTML不支持%页面百分比) |    设置图像的宽度    |
| height | 像素(XHTML不支持%页面百分比) |    设置图像的高度    |
| border |         数字         |   设置图像边框的宽度   |
| usemap |        url         | 将图像定义为客户端图像映射 |
``` html
客户端图像映射（图片热点）：
<img src="planets.gif" alt="Planets" usemap="#planetmap" />
<map name = "planetmap">
	<area href="http:baidu.com" shape="rect" coords="0, 0, 110, 260" />
	<area href="http:baidu.com" shape="circle" coords="129, 161, 10" />
	<area href="http:baidu.com" shape="pole" coords="0, 0, 110, 260" />
</map>
```
### 3.4，链接标签
1，语法
```html
<a href = "跳转目标" target = "目标窗口的弹出方式">文本或图像</a>
```
2，属性
href：用于指定链接目标的url地址(必须属性)，当为标签应用href属性时，它就具有了超链接的功能
target：用于指定链接页面的打开方式，取值有
- _self
- _blank
- _top
- _parent
- framename(框架名称)
  3，锚点定位
```html
<a href="#id名称或name名称">链接地址</a>
	须对应名称相同
<a name="name名称" />
<h3 id = "id名称">哈哈</h3>

%% 注：外部锚点定位只需要将#替换成外部网页地址 %%
```
4，base标签
base可以设置整体链接的打开状态
base写到`<head></head>`之间
```html
<base target = "_blank">
```
### 3.5，特殊字符
| 特殊字符 | 描述  |       字符的代码        |
| :--: | :-: | :----------------: |
| ` `  | 空格符 | `$nbsp;`或 `&ensp;` |
|  <   | 小于号 |       `&lt;`       |
|  >   | 大于号 |       `&gt;`       |
|  &   | 和号  |      `&amp;`       |
|  ￥   | 人民币 |      `&yen;`       |
```html
<sub>下标</sub>
<sup>上标</sup>
```
## 四，表格
### 4.1，基本语法
```html
<table>
	<caption>表格标题</caption>
	<tr>
		<td>单元格内的文字</td>
		...
	</tr>
	...
</table>
```
### 4.2，表格属性

|     属性名     |            含义            |       常见属性值       |
| :---------: | :----------------------: | :---------------: |
|   border    | 设置表格的边框(默认border="0"无边框) |        像素值        |
| cellspacing |    设置单元格与单元格边框之间的空白间距    |    像素值(默认为2像素)    |
| cellpadding |   设置单元格内容与单元格边框之间的空白间距   |    像素值(默认为1像素)    |
|    width    |         设置表格的宽度          |        像素值        |
|   height    |         设置表格的高度          |        像素值        |
|    align    |     设置表格在网页中的水平对齐方式      | left、center、right |
### 4.3，表头单元格标签
th，也是一个单元格，只不过和普通的 td 单元格不一样，它会让里面的文字居中并加粗
### 4.4，表格标题 caption
```html
<caption>表格标题</caption>
```
注意：
1. caption元素定义表格标题，通常这个标题会被居中且显示于表格之上
2. caption标签必须紧随table标签之后
3. 这个标签只存在表格里面才有意义
### 4.5，合并单元格
跨行合并：rowspan = "合并单元格的个数"
跨列合并：colspan = "合并单元格的个数"
## 五，列表标签
### 5.1，有序列表
```html
<ol>
	<li></li>
	...
</ol>
```
### 5.2，无序列表
```html
<ul>	
	<li></li>
	...
</ul>
```
### 5.3，定义描述列表
```html
<dl>
	<dt></dt>
	<dd></dd>
	<dd></dd>
	...
</dl>
```
## 六，表单标签
### 6.1，input控件
```html
<input type="属性值" value="值" />
%% type属性设置不同的属性值用来指定不同的控件类型 %%
```

|  属性   |   属性值    |                描述                 |
| :---: | :------: | :-------------------------------: |
| type  |   text   |              单行文本输入框              |
|       | password |               密码输入框               |
|       |  radio   | 单选按钮(radio如果是一组，必须给他们命名相同的名字name) |
|       | checkbox |                复选框                |
|       |  button  |               普通按钮                |
|       |  submit  |               提交按钮                |
|       |  reset   |               重置按钮                |
|       |  image   |             图像形式的提交按钮             |
|       |   file   |                文件域                |
| name  |  由用户自定义  |               控件的名称               |
| value |  由用户自定义  |          input控件中的默认文本值           |
| size  |   正整数    |         input控件在页面中的显示宽度          |
### 6.2，lable标签
作用：
1. 用于绑定一个表单元素，当点击 lable 标签时，被绑定的表单元素就会获得输入焦点
2. 为了提高用户体验
   绑定元素的方式：
1. 第一种用法就是 lable 直接包括 input 表单，适用单个表单选择
```html
<lable>用户名：<input type="radio" name="usename" value="请输入用户名" /></lable>
```
1. 第二种用法 for 属性规定 lable 与哪个表单元素绑定
```html
<input type="radio" id="sex" />
<lable for="sex">男</lable>
```
### 6.3，textarea 控件
```html
<textarea col="每行中的字符数" rows="显示的行数">
	文本内容
</textarea>
%% 通过textarea控件可以轻松地创建多行文本输入框 %%
```
### 6.4，select 下拉列表
```html
<select>
	<option selected="selected">选项1</option>
	<option>选项2</option>
	...
</select>
```
注意：
1. `<select>`中至少包含一对 option
2. 在option中定义selected="selected"时，当前项即为默认选中项
### 6.5，form表单域
```html
%% 在html中，form标签被用于定义表单域，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器 %%
<form action="url地址" method="提交方式" name="表单名称">
	各种表单控件
</form>
```

|  属性  |    属性值    |                       作用                      |
|:------:|:------------:|:-----------------------------------------------:|
| action |    url地址   | 用于指定接收并处理表单数据的服务器程序的url地址 |
| method |   get/post   |  用于设置表单数据的提交方式，其取值为get或post  |
|  name  |     名称     |  用于指定表单的名称，以区分同一个页面的多个表单 |
## 七，frameset、frame、iframe标签
### 7.1，frameset
```html
%% frameset元素课定义一个框架集，用来组织多个窗口(框架) %%
<frameset cols="25%,50%,25%>
	<frame src="frame_a.html">
	<frame src="frame_b.html">
	<frame src="frame_c.html">
	
	<noframes>
		<body>您的浏览器无法处理框架</body>
	</noframes>
</frameset>
```
注意：
1. 不能与`<frameset></frameset>`标签一起使用`<body></body>`标签。
2. 不过，需要为了不支持框架的浏览器添加一个`<noframes>`标签，务必将此标签放置在`<body></body>`中。
### 7.2，frame
|     属性    |       值      |             描述            |
|:-----------:|:-------------:|:---------------------------:|
| frameborder |      0或1     |  规定是否显示框架周围的边框 |
|     name    |      name     |        规定框架的名称       |
|   noresize  |    noresize   |    规定无法调整框架的大小   |
|  scrolling  | yes、no、auto |  规定是否在框架中显示滚动条 |
|     src     |      url      | 规定在框架中显示的文档的url |
### 7.3，iframe
|     属性      |    值     |      描述       |
| :---------: | :------: | :-----------: |
| frameborder |   0或1    | 规定是否显示框架周围的边框 |
|   height    | pixels或% |  规定iframe的高度  |
|    width    | pixels或% |  规定iframe的宽度  |
```html
<body>
	<iframe src="scape.jpg"></iframe>
	<p>一些老的浏览器不支持</p>
	<p>如果得不到支持，iframe是不可见的</p>
</body>
```
