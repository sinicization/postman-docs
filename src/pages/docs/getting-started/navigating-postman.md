---
title: "Postman导航"
order: 3
page_id: "navigating_postman"
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "下载并安装"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "其他资源"
  - type: subtitle
    name: "视频"
  - type: link
    name: "训练营 | Postman 升级"
    url: "https://youtu.be/cCruwkHi9o4"
  - type: link
    name: "历史 | Postman 升级"
    url: "https://www.youtube.com/watch?v=9VBTKwUCsGw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=4"
  - type: link
    name: "通用搜索 | Postman 升级"
    url: "https://www.youtube.com/watch?v=1K6Pl6o_tj8"
  - type: subtitle
    name: "相关博客文章"
  - type: link
    name: "Postman 设计师如何构建新的通用搜索功能"
    url: "https://blog.postman.com/how-postman-designers-built-the-new-universal-search-feature/"  
  - type: section
    name: "下一步"
  - type: link
    name: "发送您的第一个请求"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman 提供了多种视图和控件来管理您的 API 项目. Postman UI 由以下组件组成:

[![Postman app](https://assets.postman.com/postman-docs/app-overview-v8.jpg)](https://assets.postman.com/postman-docs/app-overview-v8.jpg)

* 左侧边栏提供对您的 [Collection[集合]](/docs/getting-started/creating-the-first-collection/), [API](/docs/designing-and-developing-your-api/the-api-workflow/#创建一个-api), [Environment[环境]](/docs/sending-requests/managing-environments/#创建环境), [Mock Server[模拟服务器]](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [Monitor[监视器]](/docs/running-collections/scheduling-collection-runs/) 和 [Request History[请求历史]](#历史) 的访问.
* 头部允许您创建工作区[Workspaces], 访问报告, 探索公共API网络, 在 Postman 中[搜索](#通用搜索) , 查看同步状态和通知, 移动和邀请协作者到工作区, 捕获请求和 Cookie, 访问您的设置, 帐户, 和 [Postman 计划](/docs/administration/buying/).
* 中心区域是您构建和处理请求的地方.
* 底部的状态栏允许您显示/隐藏侧边栏, [查找和替换](#查找和替换), 以及打开 [Console[控制台]](/docs/sending-requests/troubleshooting-api-requests/) 在左侧. 在右侧, 您可以启动 __Bootcamp[训练营]__, Collection Runner[集合运行者], Trash[回收站], Two pane view[双窗格视图], 和 访问帮助资源.

[![Resizing panes](https://assets.postman.com/postman-docs/resizing-panes-v8.gif)](https://assets.postman.com/postman-docs/resizing-panes-v8.gif)

您还可以在 Postman UI 中拖动以调整窗格的大小.

[![Resizing panes](https://assets.postman.com/postman-docs/panes-resized-v8.gif)](https://assets.postman.com/postman-docs/panes-resized-v8.gif)

在右侧面板上, 您将看到用于查看 Documentation[文档], Comments[评论], Code[代码] 和 Request Info[请求信息] 的图标.

<img alt="Right panel icons" src="https://assets.postman.com/postman-docs/right-panel-view-v8.jpg" height="300px"/>

要打开文档选项卡, 请选择您的集合下的请求, 然后单击右侧面板上的文档图标<img alt="Mini docs icon" src="https://assets.postman.com/postman-docs/mini-docs-icon-v8.jpg" width="25px"/>.

<img alt="Documentation icon" src="https://assets.postman.com/postman-docs/overview-documentations-v8.jpg"/>

单击 __View complete collection documentation[查看完整集合文档]__ 以在新标签页中打开文档.

<img alt="Overview Documentation" src="https://assets.postman.com/postman-docs/documentation-pane-v8.jpg" height="400px"/>

要发布集合的文档, 请参阅 [发布您的文档](/docs/publishing-your-api/publishing-your-docs/).

要打开评论选项卡, 请选择您的集合下的请求, 然后单击右侧面板上的评论图标<img alt="Mini comments icon" src="https://assets.postman.com/postman-docs/mini-comments-icon-v8.jpg" width="30px"/> . 您可以切换到评论模式以对请求的特定部分发表评论, 包括参数, Header, Body和测试.

[![Overview Comments](https://assets.postman.com/postman-docs/overview-comments-v8.jpg)](https://assets.postman.com/postman-docs/overview-comments-v8.jpg)

要了解更多关于评论, 请参阅 [评论集合](/docs/collaborating-in-postman/commenting-on-collections/).

要打开代码片段选项卡, 请选择您的集合下的请求, 然后单击右侧面板上的代码图标. 查看更多关于 [生成代码片段](/docs/sending-requests/generate-code-snippets/).

<img alt="Code snippets Pane" src="https://assets.postman.com/postman-docs/code-snippet-pane-v8.jpg" height="350px"/>

您可以通过折叠窗格来分离工作区. 使用左下角的按钮隐藏侧边栏, 使用右下角的按钮在单个和两个窗格视图之间切换.

[![general layout](https://assets.postman.com/postman-docs/split-pane-view-v8.jpg)](https://assets.postman.com/postman-docs/split-pane-view-v8.jpg)

## 通用搜索

您可以通过单击 Postman 顶部的 __Search Postman[搜索Postman]__ 来访问通用搜索 — 或使用键盘快捷键 `Command + K`.

输入您的搜索字符串并更改搜索范围以缩小搜索结果的范围 — All of Postman[所有Postman], Team Postman[团队Postman] 或 Public API Network[公共 API 网络].


<img alt="Changing scope for universal search" src="https://assets.postman.com/postman-docs/change-scope-for-universal-search-v8.gif"/>

> 对于登录用户, 工作区的默认搜索范围是团队, [探索](https://explore.postman.com) 是公共 API 网络. 对于未登录的用户, 所有结果将仅包含公共资源, 因为他们将没有任何私有数据.

您还可以通过选择 **Search for[搜索]** 附近的所需选项来更改底部的实体类型 — Workspaces[工作区], Collections[集合], APIs 或 Teams[团队].

<img alt="Universal search with filter" src="https://assets.postman.com/postman-docs/universal-search-filter-by-entity-v8.jpg"/>

如果您仍然没有找到您要查找的内容, 请单击 __Search all workspaces, collections, APIs and teams[搜索所有工作区, 集合, API 和 团队]__ 您将在一个页面中找到所有结果.


<img alt="Search all" src ="https://assets.postman.com/postman-docs/search-all-workspaces-collections-and-teams.jpg"/>

搜索结果页面上的左侧导航列出了范围和实体类型. 您可以继续更改它们以过滤结果.

<img alt="Universal search results page" src ="https://assets.postman.com/postman-docs/universal-search-results-page-v8.jpg"/>

您可以使用右侧的排序方式进一步过滤结果 - Most relevant[最相关], Most views[最多查看] 或 Most recent[最新的].

<img alt="Search results sort" src ="https://assets.postman.com/postman-docs/search-result-sort-by-v8.jpg"/>

工作区实体的搜索结果指定了工作区类型、摘要、发布者以及发布时间.

<img alt="Individual workspace search results" src ="https://assets.postman.com/postman-docs/individual-workspace-search-results-v8.jpg"/>

集合实体的搜索结果指定了工作区类型, 集合是否为分支, 发布者以及发布时间.

<img alt="Individual collection search results" src ="https://assets.postman.com/postman-docs/individual-collection-search-results-v8.jpg"/>

API 实体的搜索结果指定 API 的名称和摘要, 所有者 (用户/团队) 和 工作区类型.

<img alt="Individual API search results" src ="https://assets.postman.com/postman-docs/individual-api-search-results-v8.jpg"/>

团队实体的搜索结果指定了团队的名称和摘要. 单击团队名称, 您将被重定向到团队资料.

对于公共 API 网络, 您可以更改实体类型以缩小搜索结果的范围. 在每个实体中, 您可以根据类别进一步过滤结果.

<img alt="Public API Network Categories filter" src="https://assets.postman.com/postman-docs/public-api-network-filter-categories.jpg"/>

## 查找和替换

您可以通过单击 Postman 左下角的 __Find and Replace[查找和替换]__ 来搜索您的 Postman 工作区 — 或使用键盘快捷键 `Command + SHIFT + F` / `Control + SHIFT + F`.

输入您的搜索字符串并可选择要返回的实体, 如有必要,输入替换文本.

![查找和替换](https://assets.postman.com/postman-docs/find-and-replace-tab-v8.jpg)

Postman 将搜索 tabs[标签页], collections[集合], 和 variables[变量]. 您可以直接从搜索结果中单击以打开实体.

## 历史

您可以通过 Postman 左侧的 __History[历史]__ 选项卡访问您在 Postman 中发送的请求的历史记录. 如果您已登录 Postman 帐户, 则您的历史记录将跨设备同步.

<img alt="History Request" src="https://assets.postman.com/postman-docs/history-request-v8.jpg" height="400px"/>

单击请求以再次打开它. 单击 __+__ 将请求保存到集合. 切换 __Save Responses[保存响应]__ 以保存请求响应, 以便您可以在从历史记录中打开请求时查看请求返回的内容.

__View more actions[查看更多操作]__ 菜单允许您 save[保存], monitor[监视], document[文档], 或 mock[模拟] 一个请求. 使用删除 (垃圾桶图标) 或 __Clear all[清除所有]__ 选项从您的历史记录中删除请求. 您可以通过按 `Command` 或 `Control` 并单击请求来多选请求.

## 标签页

您可以通过打开选项卡在 Postman 中发送请求 — 单击屏幕中央的 __+__ 或按 `Command/Control + T`.

![Tabs](https://assets.postman.com/postman-docs/open-unsaved-tab-options-v8.jpg)

> 如果您打开一个请求并且不编辑或发送它, 然后打开另一个, 第一个标签页将被第二个替换. 当标签页处于 _Preview[预览]_ 模式时, 它将以斜体显示.

您可以在工作时同时打开多个标签页, 并且可以拖动标签页来重新排列它们. 使用 __...__ 按钮管理选项卡和访问最近的标签页.

> 复制标签页并不意味着创建对同一端点的第二个请求 — 当您复制标签页时, 您所做的任何编辑都会影响原始请求.

Postman 将在任何未保存更改的标签页上显示一个点.

如果您或协作者在另一个标签页或工作区中更改标签页, 则该标签页可能表示存在冲突. Postman 会提示您解决发生的任何冲突.

> 您可以在 __Settings[设置]__ 中切换 Postman 是否在新标签页中打开请求, 以及配置 Postman 在关闭具有未保存更改的标签页时是否提示您.

## 下一步

了解 Postman 的最佳方式是启动右下角的 __Bootcamp[训练营]__ 并完成课程.

![Bootcamp](https://assets.postman.com/postman-docs/bootcamp-lesson-v8.gif)

您还可以通过打开左上角的 **Home[首页]** 来访问 Bootcamp[训练营] 以及其他用于入门和了解最新信息的资源.

![Bootcamp Home](https://assets.postman.com/postman-docs/bootcamp-home-v8.jpg)

__接下来尝试 [发送您的第一个请求](/docs/getting-started/sending-the-first-request/)!__
