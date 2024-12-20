export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$6ppsfPZiGmGUccMeYB4G6.JMz/tZAL7w3HiwQBxKeUm3whomXV4fq\"]}},\"author\":{\"name\":\"Suncm\",\"url\":\"https://suncm521.github.io/\"},\"logo\":\"/logo.png\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"src\",\"blog\":{\"description\":\"千里之行，始于足下\"},\"footer\":\"默认页脚\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/\",{\"text\":\"基础\",\"icon\":\"circle-info\",\"children\":[{\"text\":\"网络\",\"link\":\"/base/network/\"}]},{\"text\":\"标签\",\"icon\":\"tag\",\"link\":\"/tag/javascript/\"},{\"text\":\"分类\",\"icon\":\"categoryselected\",\"link\":\"/category/前端/\"},{\"text\":\"时间轴\",\"icon\":\"time\",\"link\":\"/timeline/\"}],\"sidebar\":{\"/base/network/\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
