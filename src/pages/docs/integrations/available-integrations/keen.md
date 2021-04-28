---
title: "Keen"
order: 171
page_id: "keen"
warning: false
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "对集合中的请求进行分组"
    url: "/docs/sending-requests/intro-to-collections/"
---

> **[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing/)**

You can use Keen IO for API-based computation, Amazon S3 backups, and building visualizations and dashboards for your APIs. Connect your Postman Monitor results to Keen Streams with the Postman to Keen Integration.

Setting up a Keen integration requires you to get a project ID and API key before configuring Postman Monitors to push to Keen steams. After you set up the integration, you can view all monitoring data in Keen IO.

## Retrieving your Keen IO project ID and API Key

1. Log in to [Keen IO](https://keen.io/home/).
1. Find the organization and project for which you’d like to stream Postman Monitor data.
1. Go to your project’s settings and select API Keys.
1. Make a note of your project ID and API key to use later.

[![keen dashboard](https://assets.postman.com/postman-docs/59119661.jpg)](https://assets.postman.com/postman-docs/59119661.jpg)

## Configuring Postman monitors

In the **[Integrations](https://go.postman.co/workspaces)** tab for your workspace, select Keen IO from the list of third party integrations.

[![keen dashboard](https://assets.postman.com/postman-docs/integrations_keen1.png)](https://assets.postman.com/postman-docs/integrations_keen1.png)

Click the **View Details** button to see information about Keen IO.

You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for Keen IO, or view all integrations.

[![keen details](https://assets.postman.com/postman-docs/WS-integrations_Keen_details2.png)](https://assets.postman.com/postman-docs/WS-integrations_Keen_details2.png)

Click the **Add Integration** button to connect Keen IO to Postman Monitors for API-based computation, S3 backups, and building visualizations in the **Send Monitor Run Results** page.

[![keen results](https://assets.postman.com/postman-docs/WS-integrations-keen-sendMonRun.png)](https://assets.postman.com/postman-docs/WS-integrations-keen-sendMonRun.png)

To connect Keen IO to Postman monitors:

* Select a monitor.
* Enter the Keen IO Project ID.
* Enter the Keen IO Write Key.

Click the **Add Integration** button. You can send the results of multiple monitors to the same Keen IO collection.

## Viewing data in Keen IO

Within a few minutes, you should start to see data flowing into Keen IO if your Monitor is running. If you’ve sent the results of multiple Postman Monitors to Keen, you’ll be able to segment by Monitor name/id, Collection name/id, error code, and so on.

Here’s a preview of analyses from the Postman Monitors integration. You can build visualizations into dashboards that your team or customers can view with [Keen dashboard templates](https://keen.io/docs/visualize/how-to-create-a-dashboard/).

[![keen analytics](https://assets.postman.com/postman-docs/keen_dashboard.png)](https://assets.postman.com/postman-docs/keen_dashboard.png)
