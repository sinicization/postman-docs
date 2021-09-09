---
title: "Syncing your work"
order: 5
page_id: "syncing"
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "下载并安装"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "其他资源"
  - type: subtitle
    name: "案例研究"
  - type: link
    name: "HotelBeds"
    url: "https://www.postman.com/customers/Hotelbeds.pdf"
  - type: subtitle
    name: "视频"
  - type: link
    name: "Postman Cloud 简介"
    url: "https://www.youtube.com/watch?v=ccdxr0oJR-I"
  - type: subtitle
    name: "相关博客文章"
  - type: link
    name: "Backup and Sync your Postman Collections on GitHub"
    url: "https://blog.postman.com/backup-and-sync-your-postman-collections-on-github/"
  - type: section
    name: "下一步"
  - type: link
    name: "发送您的第一个请求"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

## What is Syncing?

Syncing makes all your Postman data available when you're signed in to your Postman account.

Changes, such as edits, updates, additions, or deletions, sync across all devices that are linked to your account.

These entities can sync with the server and be saved to the cloud:

* Collections
* Folders
* Requests
* Responses
* Header Presets
* Environments
* Environment variables
* Global variables
* Collection run results
* Workspaces
* History

## How do I Sync between computers?

Install [Postman](https://www.postman.com/downloads/) and sign in with the same email address or username on all your devices.

Alternatively, access Postman on the web by visiting [go.postman.co/build](https://go.postman.co/build) in your browser and signing into your account.

If you forget your username or password, you can recover them using the links in the sign-in prompt.

When you're logged into Postman, your data is synced across devices.

**注意:** Postman restricts parallel usage to three apps per account.

### States

Postman indicates the sync state of your workspace. The flow diagram for sync states is shown below:

[![Sync States](https://assets.postman.com/postman-docs/sync-states-flow.jpg)](https://assets.postman.com/postman-docs/sync-states-flow.jpg)

If you are not signed in to Postman, you see the state as **Offline**. Click **Connect Now** to connect to Postman.

[![Offline state](https://assets.postman.com/postman-docs/offline-state.jpg)](https://assets.postman.com/postman-docs/offline-state.jpg)

When you open Postman or if your connection drops, it displays **Connecting** before it starts to sync.

[![Connecting state](https://assets.postman.com/postman-docs/connecting-state.jpg)](https://assets.postman.com/postman-docs/connecting-state.jpg)

When you click the icon, you will see **Syncing** in **Online** state. The popup will indicate further information about the current sync state.

[![Online state syncing](https://assets.postman.com/postman-docs/online-state-syncing.jpg)](https://assets.postman.com/postman-docs/online-state-syncing.jpg)

If Postman is in sync with the server, the icon to the left of your name at the top right indicates **Online**, and displays a popup showing **In sync** on hover.

[![Online state in sync](https://assets.postman.com/postman-docs/online-state-in-sync.jpg)](https://assets.postman.com/postman-docs/online-state-in-sync.jpg)

While connecting to Postman, if you encounter a syncing error, it will indicate **Error** state. Hover to see the detailed information on the error.

[![Error state](https://assets.postman.com/postman-docs/error-state-v2.jpg)](https://assets.postman.com/postman-docs/error-state-v2.jpg)

> You may occasionally experience sync conflicts between Postman and its servers, particularly when you work as part of a team: [Postman will prompt you to resolve any conflicts that occur](/docs/collaborating-in-postman/using-workspaces/conflicts/)

## Sign Out

If you choose to sign out, Postman deletes your data from the local instance of the app.

Don’t worry, Postman restores all your data from the cloud when you sign in, and enables other users to use it without your data clashing.

When you reload, Postman automatically retrieves the most recent and up-to-date version of your collections.

## Disabling sync

If you or your organization have a requirement to prevent your data from being synced to the Postman cloud, you can use Postman without an account and [manually back up your data locally](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

You can delete already synced data by [deleting your account](#deleting-your-postman-account). Note that if you are a part of a Postman team, you must first [leave the team](https://go.postman.co/settings/me/team) in order to delete your account.

> Learn more about [Security at Postman](https://www.postman.com/security/).

## Deleting your Postman account

If you have a Postman account and are not part of a Postman team, you can [delete your account](https://go.postman.co/settings/me).

Otherwise, you can contact us at [help@postman.com](mailto:help@postman.com).

[![delete account](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)
