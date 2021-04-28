---
title: "Custom SAML in Onelogin"
order: 139
page_id: "saml_onelogin"
warning: false
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "SSO简介"
    url: "/docs/administration/sso/intro-sso/"
---

> You must be an admin of your Onelogin organization in order to create this custom SAML application.

## Setting up a custom SAML application in Onelogin

Head to the Onelogin home page and login to your account using your credentials.

1. Navigate to the Onelogin applications page, and click **ADD APP**, as illustrated below:

   [![onelogin add app2](https://assets.postman.com/postman-docs/Onelogin-Add-Apps2.png)](https://assets.postman.com/postman-docs/Onelogin-Add-Apps2.png)

1. Search for *SAML Test Connector* in the Find Applications section. Select *SAML Test Connector (IdP w/ attr w/ sign response)* from the search results

    [![onelogin find saml](https://assets.postman.com/postman-docs/Onelogin-Select-SAML1.png)](https://assets.postman.com/postman-docs/Onelogin-Select-SAML1.png)

1. Update or rename the **Display Name**, and click **SAVE**.

   [![onelogin display name](https://assets.postman.com/postman-docs/Onelogin_display.png)](https://assets.postman.com/postman-docs/Onelogin_display.png)

1. You are now in the *Info* tab. Click the *Configuration* tab. Enter your Postman service provider details here. These details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). Click **SAVE** to proceed.

   [![onelogin service provider](https://assets.postman.com/postman-docs/Onelogin-IDP-Details2.png)](https://assets.postman.com/postman-docs/Onelogin-IDP-Details2.png)

    Copy the Entity ID, ACS URL, and Single Logout URL from the Postman service provider details and paste in the corresponding fields. However, you need to copy this string `^https:\/\/identity.getpostman.com\/` and paste it in the **Parameters** field. Copy **EntityID** in the *Recipient* field, **ACS URL** in *ACS (Consumer) URL, and set the **ACS(Consumer) URL Validator** to the value illustrated in the above screen. Ensure you enter `https://identity.getpostman.com` in the *Single Logout URL* field.

1. Navigate to the SSO tab in Onelogin and copy the `Identity Provider SSO URL`, `SAML 2.0 Endpoint (HTTP)`, and `X.509 Certificate` from here:

   [![onelogin service provider](https://assets.postman.com/postman-docs/Onelogin-Copy-IDP-Details1.png)](https://assets.postman.com/postman-docs/Onelogin-Copy-IDP-Details1.png)

1. To copy the X.509 certificate, click **View Details**. And then paste the values into the corresponding fields in the Postman Identity Provider Details screen:

    [![onelogin service provider details](https://assets.postman.com/postman-docs/server-provider-details.jpg)](https://assets.postman.com/postman-docs/server-provider-details.jpg)

Generate or regenerate the relay state, select “Automatically add new users using this authentication method to my team", and click **Save Authentication**.
