module.exports = {
    evergreen: true,
    title: '个人主页', 
    description: 'msw的博客',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/other/tryother.md' },
          { text: 'External', link: 'https://google.com' },
        ],

        sidebar: {
            '/': [
                "/other/tryother.md"
            ]
        }

      }
}