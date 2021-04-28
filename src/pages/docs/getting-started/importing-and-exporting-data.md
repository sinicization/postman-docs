---
title: 'Importing and exporting data'
order: 8.2
page_id: 'importing_and_exporting_data'
contextual_links:
  - type: section
    name: "其他资源"
  - type: subtitle
    name: "案例研究"
  - type: link
    name: "Healthwise"
    url: "https://www.postman.com/customers/healthwise.pdf"
  - type: subtitle
    name: "相关博客文章"
  - type: link
    name: "Sync your specs"
    url: "https://blog.postman.com/sync-your-specs/"
  - type: link
    name: "Importing SoapUI projects into Postman"
    url: "https://blog.postman.com/importing-soapui-projects-into-postman/"
  - type: link
    name: "Importing RAML folders into Postman"
    url: "https://blog.postman.com/supporting-raml-folders-in-postman/"
  - type: link
    name: "Introducing Postman Collection Format Schema"
    url: "https://blog.postman.com/introducing-postman-collection-format-schema/"
  - type: link
    name: "Travelogue of Postman Collections Format v2"
    url: "https://blog.postman.com/travelogue-of-postman-collection-format-v2/"
  - type: subtitle
    name: "下一步"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"

warning: false
---

Postman can import and export Postman data, including collections, environments, data dumps, and globals. Postman can also import non-Postman data in the form of API schemas to help you consolidate your API development workflow.

## Contents

* [Importing data into Postman](#importing-data-into-postman)

    * [Importing Postman data](#importing-postman-data)

        * [Converting Postman collections from v1 to v2](#converting-postman-collections-from-v1-to-v2)

    * [Importing API specifications](#importing-api-specifications)

    * [Importing via GitHub repositories](#importing-via-github-repositories)

* [Exporting Postman data](#exporting-postman-data)

    * [Exporting collections](#exporting-collections)

    * [Exporting environments](#exporting-environments)

    * [Exporting data dumps](#exporting-data-dumps)

* [下一步](#next-steps)

## Importing data into Postman

You can import (e.g. collections) as well as your API specifications directly into Postman.

To import your data into Postman, click **Import** in the upper-left corner.

![Import modal](https://assets.postman.com/postman-docs/import-modal-new.jpg)

You can import your data via files, folders, links, raw text, or GitHub repositories.

### Importing Postman data

You can import Postman data you previously exported, including collections, environments, data dumps, and globals.  

To import Postman data, click **Import**. Select your file or folder, input your link, paste your raw text, or [import from GitHub](#importing-github-repositories). Postman will automatically recognize Postman data, confirming the name, format, and what the file will import as. Click **Import** to bring your data into Postman.

![Import collection and environment](https://assets.postman.com/postman-docs/import-coll-env-2.jpg)

#### Converting Postman collections from v1 to v2

Postman no longer supports the collection v1 format and will return an error if you attempt to import a collection in this format. You can convert your collection's format from v1 to v2 to import it into Postman.

![Collection v1 format](https://assets.postman.com/postman-docs/collection-v1-import.jpg)

You can take the following steps to convert the Postman collection format from v1 to v2.

* In the terminal of your choice, enter the following command to install the Postman collection transformer.

```bash
sudo npm install -g postman-collection-transformer
```

* You can retrieve a list of convert options by running it with the ``-h`` flag.

```bash
postman-collection-transformer convert -h
```

 Option | Details |
|:--|:--|
| `-h`, `--help` | Outputs usage information |
| `-i`, `--input <path>` | Returns a path to the input postman collection file |
| `-j`, `--input-version [version]` | Returns the version of the input collection format standard (v1 or v2) |
| `-o`, `--output <path>` | Returns a path to the output postman collection file |
| `-p`, `--output-version [version]` | Returns the version of the output collection format standard (v1 or v2) |
| `-P`, `--pretty` | Prints the output in pretty format |
| `--retain-ids` | Retains the request and folder IDs during conversion (collection ID is always retained) |
| `-w`, `--overwrite` | Overwrites the output file if it exists |

* You can convert an individual Postman collection from v1 to v2 by entering the command below.

```
postman-collection-transformer convert -i <path to input Postman collection file> -o <path where the output Postman file will be downloaded> -j 1.0.0 -p 2.0.0 -P
```

The resulting collection will be in v2 format and downloaded to your target file path. Check out the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) to take a closer look at the collection conversion.

### Importing API specifications

Postman supports the following API specification formats:

* [OpenAPI 3.0](https://github.com/postmanlabs/openapi-to-postman)

* RAML [0.8](https://github.com/postmanlabs/raml-to-postman), [1.0](https://github.com/postmanlabs/raml1-to-postman)

* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)

* [cURL](https://github.com/postmanlabs/curl-to-postman)

* WADL

* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman), [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)

* [Runscope](https://github.com/postmanlabs/runscope-to-postman)

* [DHC](https://github.com/postmanlabs/dhc-to-postman)

To import your API specifications into Postman, click **Import**. Select your file or folder, input your link, or paste your raw text. Confirm the name, format, and what you would like your data to import as, then click **Import** to bring your data into Postman.

![Import file](https://assets.postman.com/postman-docs/import-file-2.jpg)

> You can configure your **Import Settings**, which will differ depending on your API specification.

You can import several API specification files at once. Select the workspace you'd like to import the APIs into, choose whether you want to generate collections from the APIs, configure the details, and click **Import**.

When importing into a team workspace, you can also choose to add the APIs to the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

[![Import several APIs](https://assets.postman.com/postman-docs/import-multiple-apis.gif)](https://assets.postman.com/postman-docs/import-multiple-apis.gif)

### Importing via GitHub repositories

> You must be signed in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import data in bulk from a GitHub repository by selecting **Import** > **Code repository** > **Connect to GitHub**.

<img alt="Import from github" src="https://assets.postman.com/postman-docs/import-from-github1.jpg"/>

Confirm your GitHub account and **Authorize postmanlabs** to access your repositories.

<img alt="Import from github" src="https://assets.postman.com/postman-docs/authorize-postman-github2.jpg" width="350px"/>

In Postman, select your GitHub organization, repository, and branch, then **Continue**.

<img alt="Select org, repo, branch" src="https://assets.postman.com/postman-docs/select-repo.jpg"/>

Confirm the files you would like to import into Postman. You can also opt to **Generate collection from imported APIs** and select what you would like to link this collection as. Click **Show advanced settings** to control how Postman should generate collections based on your file types, then select **Import**.

<img alt="Confirm github import" src="https://assets.postman.com/postman-docs/confirm-import.jpg"/>

You will receive a confirmation once the import has completed.

<img alt="Import completed" src="https://assets.postman.com/postman-docs/successful-import.jpg"/>

You can now view your newly imported files and generated collections in Postman.

<img alt="Imported data in app" src="https://assets.postman.com/postman-docs/imported-data-in-app.jpg"/>

## Exporting Postman data

You can export your Postman data, including collections, environments, data dumps, and globals, as JSON files. These files can be imported back into any Postman instance, or utilized by [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

### Exporting collections

You can export your collections from Postman by selecting the **...** next to the collection, then **Export**.

![Export collection menu](https://assets.postman.com/postman-docs/export-collection-menu2.jpg)

You can then select the format you'd like your collection to export as. Click **Export** to download your newly generated JSON file.

> The export to Collection v1 format is no longer supported in Postman.

![Export collection format](https://assets.postman.com/postman-docs/export-collection-format-v8.jpg)

> Learn more about Postman's [collection formats](https://blog.postman.com/travelogue-of-postman-collection-format-v2/).

### Exporting environments

You can export your environments from Postman by selecting the gear icon in the upper-right corner to open **Manage Environments**. Click the download symbol next to your environment to download your newly generated JSON file.

![Export environment menu](https://assets.postman.com/postman-docs/export-environment-menu-3.jpg)

### Exporting data dumps

You can export a data dump of all of your collections, environments, globals, and header presets in Postman. Select the wrench icon in the upper-right corner to open **Settings**. Click to open the **Data** tab, then **Download** to save the newly generated JSON file of your Postman data.

![Export data dump](https://assets.postman.com/postman-docs/data-dump-menu-2.jpg)

## 下一步

You can collaborate on collections by [sharing](/docs/collaborating-in-postman/sharing/) and [commenting](/docs/collaborating-in-postman/commenting-on-collections/) to discuss your API projects with team members. Learn more about [Postman's API workflow](/docs/designing-and-developing-your-api/the-api-workflow/).
