---
title: HTML5（包含CSS）
icon: laptop-code
category:
  - web
---

## 一，认识HTML5及新标签
### 1.1，HTML5简介
万维网的核心语言、标准通用语言下的一个应用超文本标记语言（HTML）的第五次重大修改。
作为新的HTML语言，具有新的元素，属性和行为。
### 1.2，XHTML和HTML5对比
**XHTML（可扩展超文本标记语言）**
- XHTML是一种增强了的HTML，它的可扩展性和灵活性将适应未来网络应用更多的需求。
  HTML5
- 它有更大的技术集，允许更多样化和强大的网站和应用程序。
- 增大了新特性：语义特性，本地存储特性，设备兼容特性，链接特性，网页多媒体特性，三维、图形及特效特性，性能与继承特性，CSS3特性
### 1.3，广义的HTML5
广义的HTML5是HTML5本身 + CSS3 + JavaScript
这个集合有时称为HTML5和朋友，通常缩写为HTML5
### 1.4，新增语义化标签
`<header>`：头部标签
`<nav>`：导航标签
`<article>`：内容标签
`<section>`：块级标签
`<aside>`：侧边栏标签
`<footer>`：尾部标签

注意：
1. 这种语义化标准主要针对搜索引擎的
2. 这些新标签，页面中可以使用多次的
3. 在IE9之前的版本中，需要把这些元素转换为块级元素
4. 其实，移动端更喜欢使用这些标签
5. HTML5还增加了很多其他标签
### 1.5，新增多媒体标签
更方便的在页面中嵌入音频和视频，不再去使用落后的flash和其他的浏览器插件
`<audio>`：音频
`<video>`：视频

#### 1.5.1，`<audio>`音频标签
HTML5在不是用插件的情况下也可以原生的支持音频哦格式文件的播放，但支持的格式是有限的。

|             格式            | IE9 | Firefox3.5 | Opera10.5 | Chrome3.0 | Safari3.0 |
|:---------------------------:|-----|------------|-----------|-----------|-----------|
|          Ogg Vorbis         |     | √          | √         | √         |           |
|             MP3             | √   |            |           | √         | √         |
|             Wav             |     | √          | √         |           | √         |
语法格式：
```html
<audio src = "文件地址" controls = "controls"></audio>
```

标签常见属性：
- autoplay：如果出现该属性，则音频在就绪后马上播放(Firefox禁用此功能)
- controls：如果出现该属性，则向用户显示空间，比如播放按钮
- loop	：如果出现该属性，则每当音频结束时重新开始播放
- src：要播放的音频的URL

**注意**：因为不同浏览器支持不同格式，我们采取的解决方案是我们为这个音频准备多个格式，代码如下
```html
<audio controls = "controls">
	<source src = "media/snow.mp3" type = "audio/mpeg">
	<source src = "media/snow.ogg" type = "audio/ogg">
	您的浏览器太LOW，不支持audio播放
</audio>
```
#### 1.5.2，`<video>`视频标签（和audio差不多）
`<video>`元素支持三种视频格式：

|  格式  | IE9 | Firefox3.5 | Opera10.5 | Chrome3.0 | Safari3.0 |
|:------:|-----|------------|-----------|-----------|-----------|
|   Ogg  |     | √          | √         | √         |           |
| MPEG 4 | √   |            |           | √         | √         |
|  WebM  |     | √          | √         | √         | √         |
语法格式：
```html
<video src = "视频路径" controls = "controls"></video>
```

标签常见属性：
- autoplay：视频就绪自动播放(谷歌浏览器需要添加muted来解决自动播放问题)(现在可以)
- controls：向用户显示播放控件
- width：设置播放器宽度
- height：设置播放器高度
- loop：播放完是否继续播放该视频，循环播放
- preload：规定是否预加载视频(如果有了autoplay就忽略该属性)	值：auto(预先加载视频)	none(不应加载视频)
- src：视频URL地址
- poster：加载等待的画面图片(表示视频播放前展示的图片，有autoplay除外)	值：imgurl
- muted：静音播放

**注意**：因为不同浏览器支持不同格式，我们采取的解决方案是我们为这个音频准备多个格式，代码如下
```html
<video controls = "controls">
	<source src = "media/snow.mp4" type = "video/mp4">
	<source src = "media/snow.ogg" type = "video/ogg">
	您的浏览器太LOW，不支持audio播放
</video>
```
## 1.6，新增 input 表单项、表单属性
|      表单值     | 描述                        |
|:---------------:|-----------------------------|
|  type = "email" | 限制用户输入必须为Email类型 |
|   type = "url"  | 限制用户输入必须为URL类型   |
|  type = "date"  | 限制用户输入必须为日期类型  |
| type = "time"   | 限制用户输入必须为时间类型  |
| type = "month"  | 限制用户输入必须为月类型    |
| type = "week"   | 限制用户输入必须为周类型    |
| type = "number" | 限制用户输入必须为数字类型  |
| type = "tel"    | 手机号码                    |
| type = "search" | 搜索框                      |
| type = "color"  | 生成一个颜色选择表单        |

|     表单属性     | 值         | 描述                                      |
| :----------: | --------- | --------------------------------------- |
|   required   | required  | 表单拥有该属性表示其内容不能为空，必填                     |
| placeholder  | 提示文本(占位符) | 表单的提示信息，存在默认值将不显示                       |
|  autofocus   | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                  |
| autocomplete | off/on    | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项 |