import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '卡塔斯特(建设中)',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: './img/syc.jpeg' }]
    ],
    port: 4001,

    themeConfig: {
        // search: true,
        // searchMaxSuggestions: 10,
        logo: './img/syc.jpg',
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
                    // { text: '规则', link: "/rule" },
                    // { text: '随机事件', link: "/bot/RandomEvent" },
                    // { text: '涩涩', link: "/bot/sese" },
                    // { text: '今日幸运值', link: "/bot/lucky" },
                    // { text: 'sleep', link: "/bot/sleep" },
                    {
                        text: '田园一号机',
                        link: "/bot1/menu",
                        items: [
                            { text: "漂流瓶", link: "/bot1/drift.md" },
                            { text: "百科", link: "/bot1/baike.md" },
                            { text: "B站工具", link: "/bot1/bili.md" },
                            { text: "成贤校园相关服务", link: "/bot1/cx.md" },
                            { text: "类dnd事件", link: "/bot1/dnd.md" },
                            { text: "epic本周免费游戏", link: "/bot1/epic.md" },
                            { text: "每日幸运值和随机数", link: "/bot1/jrrp.md" },
                            { text: "摸", link: "/bot1/momo.md" },
                            { text: "前端每日一题", link: "/bot1/mryt.md" },
                            { text: "R6战绩查询", link: "/bot1/r6s.md" },
                            { text: "塔罗牌", link: "/bot1/tarot.md" },
                            { text: "外卖红包", link: "/bot1/tg.md" },
                            { text: "翻译", link: "/bot1/translate.md" },
                            { text: "涩涩", link: "/bot1/true_setu.md" },
                            { text: "AI(微信版)", link: "/bot1/wxai.md" },
                            { text: "AI(猫娘版)", link: "/bot1/yuanai.md" },
                            { text: "假消息制作", link: "/bot1/fackmessage.md" },
                            { text: "打卡睡觉和起床", link: "/bot1/sleep.md" },
                            { text: "搜图", link: "/bot1/soutu.md" },
                            { text: "微群管", link: "/bot1/wqg.md" },
                            
                        ]
                    },
                    { text: '田园二号机(频道)', link: "/bot/2" }
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