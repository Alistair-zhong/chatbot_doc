export default {
  lastUpdated: true,
  title: 'ChatBot 使用手册',
  description: "",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'ChatBot 使用手册',
    outlineTitle: '大纲',
    nav: [
      { text: '常见问题', link: '/ISSUE.md' },
      { text: '错误日志对照表', link: '/ERROR.md' },
      { text: '更新记录', link: '/CHANGELOG.md' }
    ],
    sidebar: [
      {
        text: '常见问题',
        items: [
          { text: '权限', link: '/auth.md',},
          { text: '工作流', link: '/workflow.md',},
          { text: '评论', link: '/comment.md',},
          { text: '杂项', link: '/other.md',},
        ]
      }
    ],
    algolia: { 
      appId: 'CXJ93XJ3HY', 
      apiKey: '805d4e80f04b3686718167722a2646f4', 
      indexName: 'chatbot' 
    }, 
  },
}
