module.exports = {
    title: 'Note',
    description: '超级无敌大笔记',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/aja.png' }]
    ],
    themeConfig: {


        logo: '/assets/img/aja.png',

        search: false,
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '谷歌', link: 'https://google.com' },
            {
                text: '红楼',
                link: '/honglou/',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            '/',
            '/about'
        ]

    }
}