module.exports = {
  title: "Just Fly",
  base: '/notesBlog/',
  themeConfig: {
    // 是否启用导航栏
    // navbar: true,
    // 自动设置侧边栏
    sidebar: 'auto',
    // 启用页面滚动，仍属于vuepress测试内容
    smoothScroll: true,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'VuePress', link:'https://vuepress.vuejs.org/zh/'},
      { text: '个人简历', link: '/resume/' },

      // 笔记导航栏 分组
      {
        text: '学习笔记',
        ariaLabel: 'StudyNotes',
        items: [
          {
            text: '整理完成',
            items: [
              { text: 'HTML笔记', link: '/html/' },
              { text: 'CSS笔记', link: '/css/' },
              { text: 'JS笔记', link: '/javaScript/' },
            ]
          },
          {
            text: '正在整理',
            items: [
              { text: 'vueJs', link: '/country/uk' }
            ]
          }
        ]
      },
      { text: '关于本站', link: '/about/' },


      // 下拉列表导航栏
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },

      // 分组下拉列表
      // {
      //   text: '地区选择',
      //   ariaLabel: 'Country Menu',
      //   items: [
      //     {
      //       text: '亚洲',
      //       items: [
      //         { text: 'China', link: '/country/china' },
      //         { text: 'Japan', link: '/country/japan' }
      //       ]
      //     },
      //     {
      //       text: '欧洲',
      //       items: [
      //         { text: 'UK', link: '/country/uk' },
      //         { text: 'Germany', link: '/country/germany' }
      //       ]
      //     }
      //   ]
      // }

    ]
  }
}