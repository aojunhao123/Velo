export default {
    title: 'Velo',
    base: process.env.NODE_ENV === 'production' ? '/velo/' : '/',
    themeConfig: {
        // 名字
        siteTitle: "Velo",
        // 导航栏
        nav: [
            { text: "文档", link: "/guide/introduce" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/aojunhao123/Velo" },
        ],
        // 侧边栏
        sidebar: {
            // 指南
            "/": [
                {
                    text: "引入",
                    items: [
                        {
                            text: "介绍",
                            link: "/guide/introduce",
                        },
                        {
                            text: "快速开始",
                            link: "/guide/quickstart",
                        },
                    ],
                },
                {
                    text: "开发指南",
                    items: [
                        {
                            text: "目录结构",
                            link: "/develop/",
                        },
                        {
                            text: "组件开发",
                            link: "/develop/component",
                        },
                        {
                            text: "全局组件",
                            link: "/develop/global",
                        },
                        {
                            text: "打包发布",
                            link: "/develop/build",
                        },
                    ],
                },
            ],
            // 组件
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button/",
                        },
                        {
                            text: "Icon",
                            link: "/components/icon/",
                        }
                    ],
                }
            ]
        },
    },
};
