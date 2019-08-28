module.exports = {
    evergreen: true,
   
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

module.exports = {
    evergreen: true,
    title: '个人主页',
    description: 'msw的博客',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '掌中云测试文档',
            description: ''
        }
    },
    themeConfig: {
        sidebarDepth: 3,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                lastUpdated: '上次编辑时间',
                sidebar: {
                    '/': [
                        {
                            title: '基本',
                            children: [
                                '/other/tryother.md'
                            ]
                        },
                        {
                            title: '测试1',
                            children: [
                                '/test1/try1.md'
                            ]
                        },
                        {
                            title: '测试2',
                            children: [
                                '/test2/try2.md'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
