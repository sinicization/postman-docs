![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Postman学习中心

Postman是API开发的协作平台. [Postman学习中心](https://learning.postman.com/) 拥有您需要的资源,可帮助您快速提升Postman技能并扩展您的技能. Postman允许您以您选择的任何格式(JSON/XML/更多)编写API测试用例并运行它们以验证和验证您的API. 此外,Postman提供了可以改善开发人员工作流程的[集合](https://learning.postman.com/docs/getting-started/creating-the-first-collection/) . Postman适用于多种平台,包括Windows和macOS. 有关更多信息,请访问 [Postman网站](https://www.postman.com/).

## 贡献指南

我们希望您为学习中心做出贡献! 要为此项目做出贡献,请阅读:

* [行为准则](https://www.postman.com/code-of-conduct)
* [贡献指南](CONTRIBUTING.md)
* [文档风格指南](DOCS_STYLE_GUIDE.md)

**注意:** 我们在GitHub Actions中添加了一个新的Markdown linter. 发出拉取请求时,它将针对此linter运行. 您更改的文件在合并之前需要通过linting. 更多信息可以在 [贡献指南](CONTRIBUTING.md) 中找到.

> 为了感谢您的贡献,我们很乐意向您发送独家贡献者swag. 填写 [贡献者提交表](https://docs.google.com/forms/d/e/1FAIpQLSfbLAcxl-IOiv3NmgEaWw7FleOaXnIyIoIrY_zn6U4JvjQBGA/viewform?usp=send_form) ,我们将向您发送感谢信.

## 在本地构建学习中心

```

   $ git clone https://github.com/postmanlabs/postman-docs.git
   $ cd postman-docs
   $ npm install
   $ npm install -g gatsby-cli
   $ npm run dev

```

**注意:** 该站点是使用node v12.11.0构建的. 我们建议安装和使用 [nvm](https://github.com/nvm-sh/nvm) 并将您的node版本设置为v12.11.0.

### 使用Docker构建

您可以使用以下dockerfile构建学习中心并在Docker容器中运行它.

1. 首先克隆存储库

   `git clone https://github.com/postmanlabs/postman-docs.git`

2. 创建一个文件并将其命名为"dockerfile",内容如下:

    ```

    FROM node:12

    EXPOSE 8000

    # 复制 postman-docs 项目目录
    COPY postman-docs /var/postman-docs

    WORKDIR "/var/postman-docs"

    RUN npm install -g gatsby-cli
    RUN npm install --force

    CMD ["yarn", "dev", "-H", "0.0.0.0" ]

    ```

   dockerfile 应该与 postman-docs 目录在同一目录中

    ```

    # 示例目录结构
    |--[当前文件夹]
       |--postman-docs
       |--dockerfile

    ```

3. 使用此命令构建Docker镜像:

   `$ docker build --tag postman-docs:1.0 .`

4. 使用一个镜像启动容器

   `$ docker run -p 8000:8000 -d postman-docs:1.0`

#### Docker编写

您还可以使用上面的 dockerfile 和这个 docker-compose.yaml 使用 `docker-compose` 命令进行构建

```

version: '3'
services:
  node:
    build:
      context: ./
    ports:
      - "8000:8000"

```

docker-compose.yaml 应与 postman-docs 目录和 dockerfile 位于同一目录中.

```

# 示例目录结构
|--[当前文件夹]
   |--postman-docs
   |--dockerfile
   |--docker-compose.yaml

```

使用此命令开始运行容器

`$ docker-compose up`

## 项目结构

构建的站点将只托管最新的文档. 所有遗留文档都存储在GitHub中并从构建中排除.

### 更新文档

* 文章维护在`/src/pages/docs`文件夹下.

* /docs 的文件夹结构是文章的 URL 结构. 例如, `/docs/postman/variables-and-environments/variables.md` 映射到URL `https://learning.postman.com/docs/postman/variables-and-environments/variables/`.

* 文档中的链接应该是相对的. 示例:

```

   [Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)

```

## 资源

* [下载Postman](https://www.postman.com/downloads/)
* [Postman发行说明](https://www.postman.com/downloads/release-notes)
* [Postman集成](https://www.postman.com/integrations/)
* [Postman API](https://docs.api.getpostman.com/)
* [Postman社区](https://community.postman.com/) 在Discourse上

## License

[Apache License 2.0](LICENSE)
