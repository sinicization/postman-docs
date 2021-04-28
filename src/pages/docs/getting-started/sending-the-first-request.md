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
    name: "Sending a request"
    url: "https://www.youtube.com/watch?v=7E60ZttwIpY"
  - type: link
    name: "How to use an API"
    url:  "https://www.youtube.com/watch?v=jCadnlO9xSQ&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: section
    name: "下一步"
  - type: link
    name: "Creating your first collection"
    url:  "/docs/getting-started/creating-the-first-collection/"
  - type: link
    name: "Requests"
    url: "/docs/sending-requests/requests/"

warning: false
---

You can make requests to APIs in Postman. An API request allows you to retrieve data from a data source, or to send data. APIs run on web servers, and expose endpoints to support the operations client applications use to provide their functionality.

Each API request uses an HTTP method. The most common methods are `GET`, `POST`, `PATCH`, `PUT`, and `DELETE`.

* `GET` methods retrieve data from an API.
* `POST` sends new data to an API.
* `PATCH` and `PUT` methods update existing data.
* `DELETE` removes existing data.

In Postman you can make API requests and examine the responses without using a terminal or writing any code. When you create a request and click **Send**, the API response appears inside the Postman user interface.

[![Request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)](https://assets.postman.com/postman-docs/anatomy-of-a-request-v8.jpg)

## Sending a request

To send your first API request, open Postman. Click the __+__ plus button to open a new tab.

Enter `postman-echo.com/get` in the URL field.

Click **Send**. You will see the JSON data response from the server in the lower pane.

[![Request response](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)](https://assets.postman.com/postman-docs/first-request-sent-v8.jpg)

## 下一步

You can use the [Postman Echo API](https://docs.postman-echo.com/) to try out test requests.

Next learn more about [sending requests in Postman](/docs/sending-requests/requests/).
