export default {
    themeConfig: {
        // 名字
        siteTitle: "Velo",
        // 导航栏
        nav: [
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/button/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/qddidi/easyest" },
        ],
        // 侧边栏
        sidebar: {
            // 指南
            "/guide/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guide/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guide/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
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
