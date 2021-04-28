---
title: "Microsoft Teams"
order: 173
page_id: "microsoft_teams"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "对集合中的请求进行分组"
    url: "/docs/sending-requests/intro-to-collections/"
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

Microsoft Teams is a chat-based workspace that is available for all Microsoft Office 365 users. This integration allows you to get updates about what is happening in your team directly in Microsoft Teams.

To configure a Microsoft Teams integration, you will need to first create a Microsoft Teams webhook URL.

## Create a Microsoft Teams webhook URL

> Note that certain permissions are required by Microsoft Teams in order to [add a connector to a channel](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

Log in to your Microsoft Teams account. Create a new channel, or go to an already existing channel, where you want to set up this integration.

[![select channel](https://assets.postman.com/postman-docs/59031183.png)](https://assets.postman.com/postman-docs/59031183.png)

Click on the `...` on the right side of the channel name and select `Connectors` from the dropdown list.

[![select connectors](https://assets.postman.com/postman-docs/59031299.png)](https://assets.postman.com/postman-docs/59031299.png)

Select the `Incoming Webhook` connector from the list of available connectors.

[![select incoming webhook](https://assets.postman.com/postman-docs/59031428.png)](https://assets.postman.com/postman-docs/59031428.png)

Enter a name to identify this webhook later. You can also add an image which will be visible whenever a message is posted using this webhook. Click `Create`.

[![enter a name](https://assets.postman.com/postman-docs/59031665.png)](https://assets.postman.com/postman-docs/59031665.png)

This will generate a webhook URL which can then be used to post messages to this channel. Copy this webhook and save it for later.

[![generate webhook URL](https://assets.postman.com/postman-docs/59032020.png)](https://assets.postman.com/postman-docs/59032020.png)

## Configuring Microsoft Teams

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select Microsoft Teams from the list of third party integrations.

[![select ms_teams integration](https://assets.postman.com/postman-docs/WS-integrations-msTeam.png)](https://assets.postman.com/postman-docs/WS-integrations-msTeam.png)

### Add a team activity feed to Microsoft Teams

To add a team activity feed to Microsoft Teams:

1. Click **Add Integration**.
1. Give your integration a nickname and provide your [incoming webhook URL](#create-a-microsoft-teams-webhook-url) to receive team updates in Microsoft Teams.

   <img alt="Import from github" src="https://assets.postman.com/postman-docs/add-team-activity-feed.jpg" width="350px"/>

1. Click **Add Integration** to see your team's activity feed in the "Configured Integrations" view.

   [![ms_teams configInt](https://assets.postman.com/postman-docs/WS-integration-msTeams-confIntegration.png)](https://assets.postman.com/postman-docs/WS-integration-msTeams-confIntegration.png)

### Send monitor run results in Microsoft Teams

To send monitor run results to Microsoft Teams:

1. Click **Add Integration**.
1. In the **Monitor Run Results** page, select the monitor whose results you want to send to Microsoft Teams, and enter the notification URL.

   [![ms_teams monRun](https://assets.postman.com/postman-docs/WS-integration-msTeams-monRun.png)](https://assets.postman.com/postman-docs/WS-integration-msTeams-monRun.png)

1. Click the **Add Integration** button to see your monitors in the "Configured Integrations" view. You can also click the "Advanced Options" link to indicate if you want notifications when all monitor runs are completed, or if you want notifications for three monitor run failures and then the first successful monitor run.

   [![ms_teams monRun](https://assets.postman.com/postman-docs/WS-microsoft-teams-monitorruns.png)](https://assets.postman.com/postman-docs/WS-microsoft-teams-monitorruns.png)

## Messages in Microsoft Teams

Monitor run messages summarize the basic details of the run, if the run was successful or if it failed. Also, it provides direct links to that particular run and to the documentation for the collection.

[![microsoft teams view](https://assets.postman.com/postman-docs/59034537.png)](https://assets.postman.com/postman-docs/59034537.png)

Similarly, the Team Activity message displays updates, who made the change and what it was.

[![activity feed](https://assets.postman.com/postman-docs/59034618.png)](https://assets.postman.com/postman-docs/59034618.png)
