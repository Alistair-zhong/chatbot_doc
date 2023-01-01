---
layout: doc
---

# 错误对照表

| 描述 | 原因 | 解决方案 |
|---|---|---|
| 190 Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons. | 刷新权限的账户修改密码或者出现安全问题 | 刷新权限 |
| 190 The user must be an administrator, editor, or moderator of the page in order to impersonate it. If the page business requires Two Factor Authentication, the user also needs to enable Two Factor Authentication. | 1. 刷新权限的账户没有完整的管理员权限<br>2. 管理员账户没有开启二步验证 | 1. 授予完整的管理员权限，刷新权限<br>2. 开启二步验证，刷新权限<br>3. 使用有完整管理员权限的账户刷新权限 |
| 190 Any of the pages_read_engagement, pages_manage_metadata,<br>        pages_read_user_content, pages_manage_ads, pages_show_list or<br>        pages_messaging permission(s) must be granted before impersonating a<br>        user's page. | 刷新权限的账户没有完整的管理员权限 | 使用有完整管理员权限的账户刷新权限 |
| 190 This Page access token belongs to a Page that is not accessible. | 刷新权限的账户没有完整的管理员权限，导致取消订阅失败 | 使用有完整管理员权限的账户刷新权限 |
| (#200) Permissions error | 点赞或评论的功能因为使用频率太高受限了 | 换账户刷新权限 |
| (#551) 用户暂时收不到消息。 | 1. 用户屏蔽了专页<br>2. 用户被 FB 限制<br>3. FB 发给 chatbot 错误的数据 | 1. 引导线索取消屏蔽专页<br>2. 手动在 FB 上给线索发消息 |
| (#613) Calls to this api have exceeded the rate limit. | 发消息频率过高 | 1. 减少发消息总量，如增加频率限制,使用随机节点分流<br>2. 换账户刷新权限，此法在受限初期效果明显<br>3. 换平台走流程，或使用切换评论成长工具功能用两个平台轮番发消息<br>4. 提高订阅者转化率，或许可以提高速率上限 |
| (#2022) 有人举报了你的公共主页发送的内容，为了确保用户利益不受威胁，我们禁止你的公共主页通过 Messenger 平台发消息。此过程可能会持续 24 小时。 | 消息内容被举报，可能违反了政策 | 找到被举报内容，如有疑问，可尝试申诉 |
| (#10903) This user cant reply to this activity | 1. 用户屏蔽了专页，所以无法给评论用户发送信息<br>2. FB 政策规定无法通过七天前的评论给用户发送信息 | 建议流程中增加频率限制，避免频繁给用户发信息引起反感导致屏蔽专页 |
| (#-1) Unexpected internal error | FB 系统内部错误 | 无法解决 |
| Service temporarily unavailable | FB 系统内部错误 | 无法解决 |
| (#10) This message is sent outside of allowed window. Learn more about the new policy here: https://developers.facebook.com/docs/messenger-platform/policy-overview | 1. 在 24 小时外给用户发消息，违反政策<br>2. 评论流程的第一条消息节点类型不是评论回复 | 1. 将发消息的延迟时间减少至 24 小时内<br>2. 修改第一条消息节点类型为评论回复 |
| (#10) This action was not submitted due to new privacy rules in Europe and Japan. See developer documentation for more info. | 欧洲和日本隐私权政策 | 无法解决 |
| (#10) Message failed to send because another app is controlling this thread now. | 使用了多个机器人走流程 | 找到其他的机器人，并使其不走流程 |
| 100 Unsupported post request. Object with ID '210143758200485_547070757338455' does not exist, cannot be loaded due to missing permissions, or does not support this operation. Please read the Graph API documentation at https://developers.facebook.com/docs/graph-api | 用户删除了评论，导致 chatbot 回复留言失败 | 无法解决 |