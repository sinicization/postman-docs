---
title: "安装和更新"
order: 2
page_id: "installation_and_updates"
warning: false
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
    name: "API简介"
    url:  "https://www.youtube.com/watch?v=iFMLyMgCUTs&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: link
    name: "PostmanWeb客户端代理 | Postman升级"
    url:  "https://www.youtube.com/watch?v=6xlJUx2ZMy4&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=3"
  - type: subtitle
    name: "相关博客文章"
  - type: link
    name: "如果您是Postman的新手,请尝试的5件事"
    url: "https://blog.postman.com/first-5-things-to-try-if-youre-new-to-postman/"
  - type: link
    name: "Postman代理简介: 从浏览器无限制发送API请求"
    url: "https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/"
  - type: section
    name: "下一步"
  - type: link
    name: "发送您的第一个请求"
    url: "/docs/getting-started/sending-the-first-request/"

---

Postman 是一款适用于 Mac, Windows (32-bit / 64-bit), 和 Linux (32-bit / 64-bit) 操作系统的本机桌面应用程序, 也可在网页上访问 **[go.postman.co/build](https://go.postman.co/build)**.

要获取最新版本的Postman桌面应用程序, 请访问 [下载页面](https://www.postman.com/downloads/) 并点击适用于您平台的 **下载** .

![Postman下载页面](https://assets.postman.com/postman-docs/download-postman.jpg)

## 目录

* 在桌面上安装 Postman
    * [Mac](#在mac上安装postman)
    * [Windows](#在windows上安装postman)
    * [Linux](#在linux上安装postman)
* [在网页上使用Postman](#在网页上使用postman)
    * [网页限制](#网页限制)
* [更新Postman](#更新postman)
* [Chrome应用程序(已弃用)](#postman-chrome应用程序已弃用)
    * [迁移到本地应用程序](#迁移到本地应用程序)
* [在防火墙后使用Postman](#在防火墙后使用postman)
* [对Postman安装进行故障排除](#对postman安装进行故障排除)
* [下一步](#下一步)

> 请注意,Postman团队仅测试、修复错误并为Mac、Windows、Linux和Web上的应用程序提供支持.

## 在Mac上安装Postman

 _使用内置的存档实用程序_ [下载](https://www.postman.com/downloads/) 并解压缩该应用程序. 双击 __Postman__. 出现提示时, 将文件移动到您的 __Applications__ 文件夹 — 这将确保将来的更新可以正确安装.

> 支持的最低操作系统版本是 macOS 10.10 (Yosemite).
>
> 如果您尝试使用第三方应用程序解压缩和安装Postman,您可能会遇到"Library not loaded"错误 — 使用Mac的默认存档实用程序应该可以解决这个问题.

## 在Windows上安装Postman

[下载](https://www.postman.com/downloads/) 应用程序. 双击 `exe` 文件进行安装.

> Postman支持 Windows 7 及更高版本. `ia32 (x86)` 和 `x64 (amd64)` 安装程序均适用于Windows. Windows for ARM设备可以使用ia32二进制文件.

## 在Linux上安装Postman

你可以通过下载它, 在Linux上安装Postman—或者通过 [Snap](https://snapcraft.io/postman) 商店链接/使用命令 `snap install postman`.

要手动安装, 请[下载](https://www.postman.com/downloads/) 并解压缩应用程序, 例如到 `opt` 目录中. 您将需要 `sudo` 权限.

要从启动器图标启动应用程序, 请创建一个桌面文件, 将其命名为 `Postman.desktop` 并将其保存在以下位置:

```shell
~/.local/share/applications/Postman.desktop
```

在文件中输入以下内容 — 如果您将文件解压缩到其他位置, 则替换 `opt`  — 并保存它:

```shell
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=/opt/Postman/app/Postman %U
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
```

> Postman支持以下发行版:
>
> * Ubuntu 12.04 及更新版本
> * Fedora 21
> * Debian 8 及更新版本
>
> 某些Linux发行版的支持取决于它们是否被Electron支持. 请参阅 [Electron的文档](https://www.electronjs.org/docs/tutorial/support#linux).
>
> 建议您安装 [Snap](https://snapcraft.io/postman) , 因为它包含应用程序所需的所有库, 并且它们与应用程序本身捆绑在一起.
>
> 避免使用 `sudo` 命令启动Postman, 因为它会在Postman创建的文件上产生权限问题.
>
> 确保您对Postman存储信息的 `~/.config` 文件夹具有读/写权限.
>
> 如果您是 Ubuntu 18 用户, 您还需要安装 `libgconf-2-4` 软件包以确保Postman顺利运行: `apt-get install libgconf-2-4`

## 在网页上使用Postman

您可以在Web浏览器中使用Postman与Postman代理一起执行API开发和测试任务. 要在Web上访问Postman, 请在浏览器中访问 [go.postman.co/build](https://go.postman.co/build). 如果您使用的是Postman Web客户端, 则还需要下载Postman桌面代理. 系统将提示您下载并安装代理, 以便您可以从Web发出请求. 您也可以直接从 [此下载页面](https://www.postman.com/downloads/) 下载代理.

<img alt="Postman Agent" src="https://assets.postman.com/postman-docs/download-agent.jpg" width="500px"/>

Postman代理克服了浏览器的跨对象资源共享(CORS)限制, 并有助于从您的Postman浏览器版本发送API请求. 安装代理后, 您将能够将其用于Web请求.

> 如果您尝试发送请求但由于未选择代理而未成功, 您将在响应区域看到一个链接, 您可以单击该链接切换到代理并再次尝试您的请求. 阅读 [更多关于代理](https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/).

### 网页限制

网页Postman正在积极开发中, 但有一些功能目前只能在桌面应用程序中访问, 而不能在网络浏览器中访问:

* **实时预览**: 您不会像在桌面Postman应用程序中那样在输入请求配置时看到所有请求Header实时更新 — 您只会在编辑时看到授权Header更新.
* **将响应保存到文件**
* **证书和代理**: 这些将采用浏览器定义的值并且不能被Postman覆盖.
* **Postman拦截器**

> [网页Postman](https://blog.postman.com/announcing-postman-for-the-web-now-in-open-beta/) 仍在开发中. 请 [尝试一下](https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/) 并通过加入 [社区论坛](https://community.postman.com/t/announcing-postman-for-the-web-now-in-open-beta/14192) 上的讨论来向团队提供反馈.

## 更新Postman

当有重大更新可用时, 本地Postman应用程序会通知您. 对于其他更新, 您会在设置图标上看到一个点. 如果指示器为红色而不是橙色, 则表示更新失败.

![更新就绪](https://assets.postman.com/postman-docs/update-ready.jpg)

选择更新选项以下载或安装最新更新. 下载完成后, 您将看到一条通知, 提示您重新启动Postman应用程序以应用更新. 如果您尚未准备好更新, 请选择 __Later[稍后]__ 以在您下次启动应用程序时自动更新.

您可以在 __Settings[设置]__ &gt; __Update[更新]__ 中配置您的首选项以启用主要更新的自动下载. Postman会自动下载次要更新和错误修复.

![更新就绪](https://assets.postman.com/postman-docs/settings-updates.jpg)

## Postman Chrome应用程序(已弃用)

Postman Chrome 应用程序已弃用 — 如果您使用Chrome应用程序, 您可以 [您可以在切换到本地应用程序时保留您的数据](#迁移到本地应用程序) ___方法是与您登录的Postman帐户同步, 或者从Chrome导出并导入到本地应用___.

本地应用程序基于[Electron](https://www.electronjs.org/) 构建, 并 [克服了Chrome平台的许多限制](https://blog.postman.com/going-native/).

* 本地应用程序可让您直接使用[cookies](/docs/sending-requests/cookies/).
* 与Chrome应用程序不同, [拦截器](/docs/sending-requests/capturing-request-data/interceptor/) 不需要单独的扩展程序.
* 本地应用程序带有一个内置代理, 您可以使用它来 [捕获网络流量](/docs/sending-requests/capturing-request-data/capturing-http-requests/).
* 本地应用程序不受 Chrome 菜单栏标准的限制. 您可以检查更新、创建 Postman Windows 和选项卡以及编辑首选项.
* 本地应用程序允许您发送 `Origin` 和 `User-Agent` 等Header. 这些在 Chrome 应用程序中受到限制.
* 本地应用程序中存在 "don't follow redirects[不遵循重定向]" 选项, 以防止自动重定向返回 300-系列响应的请求 — 在 Chrome 应用程序中执行此操作需要拦截器扩展.
* 本地应用程序有一个内置[控制台](/docs/sending-requests/troubleshooting-api-requests/), 可让您查看API调用的网络请求详细信息.

### 迁移到本地应用程序

要从 Chrome 应用切换到本地应用程序, 请[下载](https://www.postman.com/downloads/) Postman 并 [登录您的帐户](https://app.getpostman.com/). 启动本地应用程序, 您的历史记录和集合将自动同步.

或者, 如果您不想登录 Postman 帐户, 您可以从 Chrome 应用程序批量导出 Postman 数据, 然后通过 __Settings[设置]__ &gt; __Data[数据]__ 批量导入新的本地应用程序.

![导入导出数据](https://assets.postman.com/postman-docs/export-data.jpg)

> 请注意, 导入将覆盖您现有的数据. 有关批量导入的更多信息, 请参阅 [导入 Postman 数据](/docs/getting-started/importing-and-exporting-data/).

## 在防火墙后使用Postman

Postman 的基础设施运行在亚马逊的 AWS 平台上. 如果您在网络防火墙后面操作, 则需要将以下域列入白名单以允许 Postman 的 WebSocket 连接:

* `\*.getpostman.com`
* `\*.postman.co`
* `\*.pstmn.io`
* `\*postman.com`

默认情况下, WebSocket 连接使用与 HTTP (80) 和 HTTPS (443) 相同的端口.

Postman 没有可以提供的固定 IP 范围. 如有必要, 请参考 [当前的 AWS IP 范围](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) 并将提供的广泛范围列入白名单.

## 对Postman安装进行故障排除

如果您在安装和运行 Postman 时遇到任何问题, 请查看以下提示—如果这些提示没有帮助, 请参阅 [社区论坛](https://community.postman.com/tags/installation) 上的安装帖子, 如果您的问题尚未解决,请创建一个新帖子.

### 更新失败错误

如果您在 Postman 中看到 __Update Failed[更新失败]__ 通知, 您可以使用 DevTools 进行调查.

![update-error-dialog](https://assets.postman.com/postman-docs/update-error-dialog.png)

使用 __View[查看]__ &gt; __Developer[开发者]__ &gt; __Show DevTools (Current View)[显示DevTools(当前视图)]__ 打开 DevTools. 一些已知错误如下:

* __错误信息:__ `Cannot update while running on a read-only volume`
    * 此错误表示应用程序用户在安装 Postman 的目录中没有写入权限. 要解决此问题, 请将 Postman 移动到用户具有写入权限的目录, 例如 Mac 的 `/Application` 目录, 以及 Linux 的 `home` 目录.

![Write Permission Issue in DevTools](https://assets.postman.com/postman-docs/write-permission-issue.png)

* __错误信息:__ `Code signature at URL file:///... did not pass validation: code object is not signed at all`
    * 此错误意味着同时运行多个更新. 在上一次更新完成之前打开应用程序时, 可能会发生这种情况. 要解决该问题, 请退出并重新打开该应用程序.

![Multiple Updates Running Issue in DevTools](https://assets.postman.com/postman-docs/multiple-updates-running.png)

### 更新按钮不可用

如果您使用的是Linux版Postman, 并通过 Ubuntu 软件中心或 Snap 商店安装了该应用程序, 您可能看不到 __Check for updates[检查更新]__ 按钮. 这是因为更新是由商店处理的, 商店应该定期自动更新Postman. 如果您使用的是Postman版本6, 则必须迁移到Postman8并更改Snap渠道以获取最新更新. 有关更多信息, 请参阅 [阅迁移到Postman 8](/docs/administration/upgrading-to-v8/).

## 下一步

如果您在安装或更新时遇到问题, 请联系 [Postman支持](https://www.postman.com/support). 如果您的安装按预期工作, [请发送您的第一个请求](/docs/getting-started/sending-the-first-request/)!
