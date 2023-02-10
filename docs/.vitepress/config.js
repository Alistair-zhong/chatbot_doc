export default {
  lastUpdated: true,
  title: 'ChatBot 使用手册',
  description: "",
  themeConfig: {
    logo: 'logo.png',
    siteTitle: 'ChatBot 使用手册',
    outline: 'deep',
    outlineTitle: '大纲',
    nav: [
      { text: '使用说明', link: '/guide/quick_start' },
      { text: '常见问题', link: '/issue/' },
      { text: '错误日志对照表', link: '/ERROR' },
      { text: '更新记录', link: '/CHANGELOG' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用说明',
          collapsible: true,
          items: [
            // { text: '简介', link: '/guide/introduction.md',},
            { text: '快速开始', link: '/guide/quick_start',},
            { text: '权限', link: '/guide/auth',},
            { text: '成长工具', collapsed: true, items:[
              { text: 'ref 触发器', link: '/guide/widget/ref',},
              { text: '评论触发器', link: '/guide/widget/comment',},
              { text: '双平台切换', link: '/guide/widget/switch',},
              { text: '进阶技巧', link: '/guide/widget/advance',},
            ]},
            { text: '工作流', collapsed: true, items:[
              { text: '基础概念', link: '/guide/workflow/concepts',},
              { text: '演示案例', link: '/guide/workflow/demo',},
              { text: '进阶技巧', link: '/guide/workflow/advance',},
              { text: '节点', items: [
                { text: '发送消息节点', link: '/guide/workflow/node/message',},
                { text: '条件节点', link: '/guide/workflow/node/condition',},
                { text: '执行节点', link: '/guide/workflow/node/action',},
                { text: '延时节点', link: '/guide/workflow/node/smart_delay',},
                { text: '随机节点', link: '/guide/workflow/node/random',},
                { text: '运行工作流节点', link: '/guide/workflow/node/start_flow',},
              ],},
              { text: '组件', items: [
                { text: '文本', link: '/guide/workflow/component/text',},
                { text: '延迟', link: '/guide/workflow/component/delay',},
                { text: '图片', link: '/guide/workflow/component/image',},
                { text: '输入', link: '/guide/workflow/component/input',},
                { text: '卡片', link: '/guide/workflow/component/card',},
                { text: '视频', link: '/guide/workflow/component/video',},
                { text: '音频', link: '/guide/workflow/component/audio',},
                { text: '文件', link: '/guide/workflow/component/file',},
                { text: '快速回复按钮', link: '/guide/workflow/component/quick_reply',},
              ],},
            ]},
            { text: '首页统计', link: '/guide/statistic',},
            { text: '订阅者', link: '/guide/subscriber',},
            { text: '非订阅者', link: '/guide/un_subscriber',},
            { text: '设置', collapsed: true, items:[
              { text: '自定义变量', link: '/guide/setting/var',},
            ]},
            { text: '专页管理', collapsed: true, items:[
              { text: '获取专页 ID', link: '/guide/page/id',},
              { text: '给其他系统账户授权', link: '/guide/page/add_role',},
              { text: '解绑专页并删除所有数据', link: '/guide/page/delete_page',},
            ]},
            { text: '政策', link: '/guide/policy'},
          ]
        }
      ],
      '/issue/': [
        {
          text: '常见问题',
          items: [
            { text: '权限', link: '/issue/auth',},
            { text: '工作流', link: '/issue/workflow',},
            { text: '评论', link: '/issue/comment',},
            { text: '杂项', link: '/issue/other',},
          ]
        }
      ]
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2023-present chatbot'
    },
    algolia: { 
      appId: 'CXJ93XJ3HY', 
      apiKey: '805d4e80f04b3686718167722a2646f4', 
      indexName: 'chatbot' 
    }, 
  },
}
