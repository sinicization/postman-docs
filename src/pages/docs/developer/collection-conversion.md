---
title: "Postman 集合转换器"
order: 149.2
page_id: "collection-conversion"
search_keyword: "postman-api-key, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "对集合中的请求进行分组"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "下一步"
  - type: link
    name: "持续集成"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

您可以将各种 API 格式转换为 Postman 集合. 如果您将 API 请求定义为 OpenAPI, Swagger, RAML, 或 GraphQL 架构格式, 则可以将这些请求转换为 Postman 集合, 然后将其导入应用程序或与其他 Postman 实用程序(例如 Newman CLI) 一起使用.

以下开源项目托管在 GitHub 上:

* [OpenAPI 3.0 to Postman](https://github.com/postmanlabs/openapi-to-postman)
* [Swagger 2.0 to Postman](https://github.com/postmanlabs/swagger2-postman2)
* [RAML 1.0 to Postman](https://github.com/postmanlabs/raml1-to-postman)
* [GraphQL to Postman](https://github.com/postmanlabs/graphql-to-postman)

这些 node.js 模块中的每一个都可以通过 NPM 或直接从存储库克隆来使用.

查看您需要转换的格式的存储库 — 自述文件指示如何安装和使用转换器. 您的输出集合适合导入 Postman 应用程序, 或使用 [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) 在命令行上运行集合.

## 下一步

如果您使用转换器在开发、测试或部署管道中自动运行 Postman 集合, 请查看如何在 [CI 工作流中使用 Postman API](/docs/running-collections/using-newman-cli/continuous-integration/).