export default {
  lastUpdated: true,
  title: 'ChatBot 使用手册',
  description: "",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'ChatBot 使用手册',
    outline: 'deep',
    outlineTitle: '大纲',
    nav: [
      { text: '使用说明', link: '/guide/' },
      { text: '常见问题', link: '/issue/' },
      { text: '错误日志对照表', link: '/ERROR.md' },
      { text: '更新记录', link: '/CHANGELOG.md' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用说明',
          collapsible: true,
          items: [
            { text: '简介', link: '/guide/introduction.md',},
            { text: '快速开始', link: '/guide/quick_start.md',},
            { text: '权限', link: '/guide/auth.md',},
            { text: '成长工具', collapsible: true, items:[
              { text: 'ref 触发器', link: '/guide/widget/ref.md',},
              { text: '评论触发器', link: '/guide/widget/comment.md',},
            ]},
            { text: '工作流', collapsible: true, items:[
              { text: '基础概念', link: '/guide/workflow/concepts.md',},
            ]},
            { text: '订阅者', link: '/guide/subscriber.md',},
            { text: '非订阅者', link: '/guide/un_subscriber.md',},
            { text: '设置', link: '/guide/setting',},
            { text: '专页管理', link: '/guide/page.md',},
          ]
        }
      ],
      '/issue/': [
        {
          text: '常见问题',
          items: [
            { text: '权限', link: '/issue/auth.md',},
            { text: '工作流', link: '/issue/workflow.md',},
            { text: '评论', link: '/issue/comment.md',},
            { text: '杂项', link: '/issue/other.md',},
          ]
        }
      ]
    },
    algolia: { 
      appId: 'CXJ93XJ3HY', 
      apiKey: '805d4e80f04b3686718167722a2646f4', 
      indexName: 'chatbot' 
    }, 
  },
}
