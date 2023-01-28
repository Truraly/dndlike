import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '卡塔斯特(建设中)',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: './img/afslq-nome4-002.ico' }]
    ],
    port: 5173,

    themeConfig: {
        // search: true,
        // searchMaxSuggestions: 10,
        logo: './img/afslq-nome4-002.ico',
        // sidebar: [
        //   '/',
        //   '/page-a',
        //   ['/page-b', 'Explicit link text']
        // ]    
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [

            {
                text: '设定集',
                collapsible: true,
                items: [
                    // { text: '简介', link: '/index' },
                    { text: '财富', link: "/set/wealth" },
                    { text: '职业', link: "/set/occupation" },
                    { text: '等级', link: "/set/level" },
                    { text: '属性', link: "/set/attribute" },
                ]
            },
            {
                text: 'QQBot玩法',
                collapsible: true,
                items: [
                    // { text: '简介', link: '/index' },
                    { text: '规则', link: "/rule" },
                    { text: '随机事件', link: "/bot/RandomEvent" },
                    { text: '涩涩', link: "/bot/sese" },
                    { text: '今日幸运值', link: "/bot/lucky" },
                    { text: 'sleep', link: "/bot/sleep" },
                ]
            },

        ]
        // sidebar: [
        //     {
        //         text: '开始',
        //         collapsible: true,
        //         items: [
        //             { text: '简介', link: '/about' },
        //             {
        //                 text: '快速上手',
        //                 link: '/start/online'
        //             },
        //             {
        //                 text: '部署',
        //                 collapsible: true,
        //                 items: [
        //                     { text: 'Linux', link: '/start/linux' },
        //                     { text: 'Windows', link: '/start/win' },
        //                     { text: 'Android (Termux)', link: '/start/android' },
        //                     { text: '随身Wifi', link: 'https://blog.csdn.net/dog234/article/details/128762751' }
        //                 ]
        //             },
        //             {
        //                 text: '命令',
        //                 items: [
        //                     { text: '消息指令', link: '/start/cmd/msg' },
        //                     { text: 'CLI 命令', link: '/start/cmd/cli' }
        //                 ]
        //             },
        //             {
        //                 text: '配置文件',
        //                 link: '/start/config'
        //             },
        //             {
        //                 text: '常见问题',
        //                 link: '/start/problem'
        //             }
        //         ]
        //     }
        // ],
        // sidebarDepth: 2
    },
    // themeConfig: {
    //     search: false,
    //     searchMaxSuggestions: 10
    //   }
})