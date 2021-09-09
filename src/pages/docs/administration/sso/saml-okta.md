---
title: 'Custom SAML in Okta'
order: 138
page_id: 'saml_okta'
warning: false
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "SSO简介"
    url: "/docs/administration/sso/intro-sso/"
---

> You must be an admin of your Okta organization in order to create this custom SAML application.

You can set up your custom SAML application by using the available Postman app in Okta or by configuring it directly in Okta.

## 目录

* [Setting up a custom SAML application in Okta](#setting-up-a-custom-saml-application-in-okta)
* [Setting up a custom SAML application in Okta by using the Postman app](#setting-up-a-custom-saml-application-in-okta-using-the-postman-app)

## Setting up a custom SAML application in Okta

To set up custom SAML application, follow the procedure outlined below:

After you login to your Okta account, perform the following steps:

### Okta - Step 1

Click **Admin** as illustrated in the following screen:
[![okta admin](https://assets.postman.com/postman-docs/Okta-SAML1.png)](https://assets.postman.com/postman-docs/Okta-SAML1.png)

### Okta - Step 2

From the Okta Dashboard, click **Add Application**.
[![okta add application](https://assets.postman.com/postman-docs/Okta-Add-Application.png)](https://assets.postman.com/postman-docs/Okta-Add-Application.png)

### Okta - Step 3

Click **Create New App**, as illustrated below:
[![okta_new app](https://assets.postman.com/postman-docs/Okta-Create-Application.png)](https://assets.postman.com/postman-docs/Okta-Create-Application.png)

### Okta - Step 4

In the following screen, ensure **Web** is selected as Platform. Select "SAML 2.0" and click **Create**.
[![okta choose saml](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)

### Okta - Step 5

Under the first step "General Settings", enter an application name and then click **Next**.
[![okta app name](https://assets.postman.com/postman-docs/okta_app_name.png)](https://assets.postman.com/postman-docs/okta_app_name.png)

### Okta - Step 6

Under the second step “Configure SAML”, section A “SAML Settings”, enter the Postman service provider details which can be found on the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, navigate to _Authentication -> <My_Okta_Integration_Name>_ and click **Edit**. Next, click **Proceed**. Ensure, you are in the following screen after the completion of this step:
[![details](https://assets.postman.com/postman-docs/server-provider-details.jpg)](https://assets.postman.com/postman-docs/server-provider-details.jpg)

Now, download the encryption certificate by clicking **Download as file** link (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below. In the following screen, click **Show Advanced Settings** link to configure advanced SAML assertion settings.
[![!okta service provider](https://assets.postman.com/postman-docs/okta_service_provider.png)](https://assets.postman.com/postman-docs/okta_service_provider.png)

| **Field**                   | **Value**    |
| --------------------------- | ------------ |
| Single Sign On URL          | ACS URL      |
| Audience URI (SP Entity ID) | Entity ID    |
| Name ID Format              | EmailAddress |

### Okta - Step 7

Configure the options as shown below. Ensure your field options reflect these values.
[![okta advanced](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)

For the Encryption Certificate, upload the encryption file in the **Encryption Certificate** field shown above (remember, you downloaded the encryption file by clicking **Download as a file** link in Postman's Service Provider Details section earlier). Click **Next** to continue.

### Okta - Step 8

Under the third step “Feedback”, select “I’m an Okta customer adding an internal app”, and check “This is an internal app that we have created”, and then click **Finish**.
[![okta feedback](https://assets.postman.com/postman-docs/okta_feedback.png)](https://assets.postman.com/postman-docs/okta_feedback.png)

### Okta - Step 9

Move over to the **Sign On** tab, and click the **View Setup Instructions** button.
[![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)](https://assets.postman.com/postman-docs/okta_sign_on.png)

The **View Setup Instructions** screen comes populated with values that you should copy and paste in the **Identity Provider Details** section.

**注意:** You will need to come back to this screen to paste the value in _Default Relay State_ that you will generate from the Postman's **Identity Provide Details** section.

### Okta - Step 10

Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.
[![okta identity provider](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:
[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)

Once you fill-in the details, click the **Generate relay/Regenerate relay** button to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:
[![details](https://assets.postman.com/postman-docs/Okta-Relay-State.png)](https://assets.postman.com/postman-docs/Okta-Relay-State.png)

To paste, click **Edit** button and paste the value in **Default Relay State** field.

Click **Save Authentication**.

## Setting up a custom SAML application in Okta by using the Postman app

To set up custom SAML application using the Postman app, follow the procedure outlined below:

After you login to your Okta account, perform the following steps:

### Postman - Step 1

Click **Admin** as illustrated in the following screen:
[![okta admin](https://assets.postman.com/postman-docs/Okta-SAML1.png)](https://assets.postman.com/postman-docs/Okta-SAML1.png)

### Postman - Step 2

From the Okta Dashboard, click **Add Application**.
[![okta add application](https://assets.postman.com/postman-docs/Okta-Add-Application.png)](https://assets.postman.com/postman-docs/Okta-Add-Application.png)

### Postman - Step 3

Enter _Postman_ in the search bar and press enter, as illustrated below. Select **Postman** and click **Add**.
[![okta add application](https://assets.postman.com/postman-docs/Okta-New-Integ1.png)](https://assets.postman.com/postman-docs/Okta-New-Integ1.png)

In the following screen, enter a name in the **Application Label** field and click **Done**.
[![details](https://assets.postman.com/postman-docs/Okta-New-Integ2.png)](https://assets.postman.com/postman-docs/Okta-New-Integ2.png)

### Postman - Step 4

Now, go to the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, navigate to _Authentication -> <My_Okta_Integration_Name>_ and click **Edit**. Next, click **Proceed**. Ensure, you are in the following screen after the completion of this step:
[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details.png)

Now, download the encryption certificate by clicking **Download as file** link (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below.

Navigate to your Okta account. Go to the **Sign On** tab and click **Edit**.
[![details](https://assets.postman.com/postman-docs/Okta-New-Integ3.png)](https://assets.postman.com/postman-docs/Okta-New-Integ3.png)

The following screen opens:
[![details](https://assets.postman.com/postman-docs/Okta-New-Integ4.png)](https://assets.postman.com/postman-docs/Okta-New-Integ4.png)

Click **Browse** and upload the encryption certificate. Click **Save**.

### Postman - Step 5

Move over to the **Sign On** tab, and click the **View Setup Instructions** button.
[![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)](https://assets.postman.com/postman-docs/okta_sign_on.png)

The **View Setup Instructions** screen comes populated with values that you should copy and paste in the **Identity Provider Details** section.

**注意:** You will need to come back to this screen to paste the value in _Default Relay State_ that you will generate from the Postman's **Identity Provide Details** section.

### Postman - Step 6

Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.
[![okta identity provider](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:
[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)

### Postman - Step 7

Once you fill-in the details, click the **Generate relay/Regenerate relay** button to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:
[![details](https://assets.postman.com/postman-docs/Okta-Relay-State.png)](https://assets.postman.com/postman-docs/Okta-Relay-State.png)

To paste, click **Edit** button and paste the value in **Default Relay State** field.

Click **Save Authentication**.
