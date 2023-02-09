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
            { text: '成长工具', collapsed: true, items:[
              { text: 'ref 触发器', link: '/guide/widget/ref.md',},
              { text: '评论触发器', link: '/guide/widget/comment.md',},
              { text: '双平台切换', link: '/guide/widget/switch.md',},
              { text: '进阶技巧', link: '/guide/widget/advance.md',},
            ]},
            { text: '工作流', collapsed: true, items:[
              { text: '基础概念', link: '/guide/workflow/concepts.md',},
              { text: '演示案例', link: '/guide/workflow/demo.md',},
              { text: '进阶技巧', link: '/guide/workflow/advance.md',},
              { text: '节点', items: [
                { text: '发送消息节点', link: '/guide/workflow/node/message.md',},
                { text: '条件节点', link: '/guide/workflow/node/condition.md',},
                { text: '执行节点', link: '/guide/workflow/node/action.md',},
                { text: '延时节点', link: '/guide/workflow/node/smart_delay.md',},
                { text: '随机节点', link: '/guide/workflow/node/random.md',},
                { text: '运行工作流节点', link: '/guide/workflow/node/start_flow.md',},
              ],},
              { text: '组件', items: [
                { text: '文本', link: '/guide/workflow/component/text.md',},
                { text: '延迟', link: '/guide/workflow/component/delay.md',},
                { text: '图片', link: '/guide/workflow/component/image.md',},
                { text: '输入', link: '/guide/workflow/component/input.md',},
                { text: '卡片', link: '/guide/workflow/component/card.md',},
                { text: '视频', link: '/guide/workflow/component/video.md',},
                { text: '音频', link: '/guide/workflow/component/audio.md',},
                { text: '文件', link: '/guide/workflow/component/file.md',},
                { text: '快速回复按钮', link: '/guide/workflow/component/quick_reply.md',},
              ],},
            ]},
            { text: '首页统计', link: '/guide/statistic.md',},
            { text: '订阅者', link: '/guide/subscriber.md',},
            { text: '非订阅者', link: '/guide/un_subscriber.md',},
            { text: '设置', collapsed: true, items:[
              { text: '自定义变量', link: '/guide/setting/var.md',},
            ]},
            { text: '专页管理', collapsed: true, items:[
              { text: '获取专页 ID', link: '/guide/page/id.md',},
              { text: '给其他系统账户授权', link: '/guide/page/add_role.md',},
              { text: '解绑专页并删除所有数据', link: '/guide/page/delete_page.md',},
            ]},
            { text: '政策', link: '/guide/policy.md'},
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
