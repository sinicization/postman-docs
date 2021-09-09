---
title: "发送您的第一个请求"
order: 4
page_id: "sending_the_first_request"
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "安装和更新"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "其他资源"
  - type: subtitle
    name: "视频"
  - type: link
    name: "发送一个请求"
    url: "https://www.youtube.com/watch?v=7E60ZttwIpY"
  - type: link
    name: "如何使用 API"
    url:  "https://www.youtube.com/watch?v=jCadnlO9xSQ&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: section
    name: "下一步"
  - type: link
    name: "创建您的第一个集合"
    url:  "/docs/getting-started/creating-the-first-collection/"
  - type: link
    name: "请求"
    url: "/docs/sending-requests/requests/"

warning: false
---

您可以在 Postman 中向 API 发出请求. API 请求允许您从数据源检索数据, 或发送数据. API 在 Web 服务器上运行, 并公开端点以支持客户端应用程序用来提供其功能的操作.

每个 API 请求都使用一个 HTTP 方法. 最常见的方法是 `GET`, `POST`, `PATCH`, `PUT`, 和 `DELETE`.

* `GET` 方法从 API 检索数据.
* `POST` 向 API 发送新数据.
* `PATCH` 和 `PUT` 方法更新现有数据.
* `DELETE` 删除现有数据.

在 Postman 中, 您可以发出 API 请求并检查响应, 而无需使用终端或编写任何代码. 当您创建请求并单击 **Send[发送]** 时, API 响应会出现在 Postman 用户界面内.

[![Request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)

## 发送一个请求

要发送您的第一个 API 请求, 请打开 Postman. 单击 __+__ 加号按钮打开一个新标签页.

在 URL 字段中输入 `postman-echo.com/get`.

单击 **Send[发送]**. 您将在下方窗格中看到来自服务器的 JSON 数据响应.

[![Request response](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)

## 下一步

您可以使用 [Postman Echo API](https://docs.postman-echo.com/) 来尝试测试请求.

接下来了解更多关于 [在 Postman 中发送请求](/docs/sending-requests/requests/).