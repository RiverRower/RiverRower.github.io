import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/knowledge/": [
    {
      text: "前端基础",
      icon: "book",
      prefix: "web/",
      link: "web/",
      children: "structure",
    },
    {
      text: "TypeScript",
      icon: "book",
      prefix: "TypeScript/",
      link: "TypeScript/",
      children: "structure",
    },
    {
      text: "Docker",
      icon: "book",
      prefix: "docker/",
      link: "docker/",
      children: "structure",
    },
  ]
});
