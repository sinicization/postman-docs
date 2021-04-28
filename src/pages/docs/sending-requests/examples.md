---
title: "Specifying examples"
order: 27
page_id: "examples"
contextual_links:
  - type: section
    name: "先决条件"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "其他资源"
  - type: subtitle
    name: "视频"
  - type: link
    name: "Provide Examples | Postman Level Up"
    url: "https://www.youtube.com/watch?v=C0Z3OMuCGBw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=5"
  - type: subtitle
    name: "案例研究"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/resources/case-studies/imgur/"
  - type: section
    name: "下一步"
  - type: link
    name: "Documenting your API"
    url: "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Setting up mock servers"
    url: "/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/"

warning: false
---

This topic covers:

* [What is an example?](#what-is-an-example)
* [Why use examples?](#why-use-examples)
* [Adding an example](#adding-an-example)
* [Accessing your saved examples](#accessing-your-saved-examples)
* [What happened to the ‘Save Response’ feature?](#what-happened-to-the-save-response-feature)
* [How your examples appear in Postman documentation](#how-your-examples-appear-in-postman-documentation)

## What is an example?

An example is a tightly coupled request and response pair.

For instance, as shown in the image below, '200 OK custom response' is the name of an example. To complete the example, you can mock an 'example request' and an 'example response'.

[![whats an example](https://assets.postman.com/postman-docs/what-is-example.jpg)](https://assets.postman.com/postman-docs/what-is-example.jpg)

Developers can mock a request and response in Postman before sending the actual request or setting up a single endpoint to return the response.

To establish an example during the earliest phase of API development:

* Requires clear communication between team members.
* Aligns their expectations.
* Helps developers and testers start more quickly.

## Why use examples?

Often it's useful to mock and save a couple of example responses with a request, such as a status code, to make your API more understandable.

Let's say you want to build an API with an endpoint that does not yet exist, or your server isn’t ready. You can mock raw responses and save them. Then, you'll be able to generate a mock endpoint for each of them using [Postman's mock service](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).

Developers can make requests to the mock endpoint and start front-end development or [write tests](/docs/writing-scripts/test-scripts/) based on the mock response returned from the mock endpoint.

## Adding an example

Suppose you are working on a request that is saved in a [collection](/docs/sending-requests/intro-to-collections/). You can add examples to this request with a new custom response or the response from the server.

[![start dropdown](https://assets.postman.com/postman-docs/WS-collections-add-examples.png)](https://assets.postman.com/postman-docs/WS-collections-add-examples.png)

### New custom response

You can create examples that define how the response should look. The image below outlines the steps for creating an example with a new response. Note that the base request is loaded as an 'example request' in the Example editor.

[![adding example with new response](https://assets.postman.com/postman-docs/add-example-new-response.jpg)](https://assets.postman.com/postman-docs/add-example-new-response.jpg)

### Response from the server

After you receive a response from a server, you might want to save the current request and response pair as an example. The steps to save the current request and response pair are similar to creating a new response from scratch. Note that the base request and the response from the server are loaded as the 'example request' and 'example response'.

[![adding example with response from server](https://assets.postman.com/postman-docs/add-example-server-response.jpg)](https://assets.postman.com/postman-docs/add-example-server-response.jpg)

Later you can return to your base request and resume by clicking on the request name in the upper left corner of the builder.

[![going back to the base request](https://assets.postman.com/postman-docs/going-back-to-the-base-request.png)](https://assets.postman.com/postman-docs/going-back-to-the-base-request.png)

> Postman recommends example responses be no larger than 5 MB in size for optimal app performance.

## Accessing your saved examples

Click on the **Examples** dropdown in the upper right corner of the builder to access all your saved examples.

[![accessing saved examples](https://assets.postman.com/postman-docs/accessing-saved-examples.jpg)](https://assets.postman.com/postman-docs/accessing-saved-examples.jpg)

## What happened to the 'Save Response' feature?

[Saving responses](/docs/sending-requests/responses/) has been a Postman feature for a long time. Over time users wanted to edit responses before saving them, and add new responses. Examples provides that functionality.

You can save responses as before, but now you can edit them whenever you want. To access previously saved responses, click the **Examples** dropdown.

[![accessing saved examples](https://assets.postman.com/postman-docs/accessing-saved-examples-1.jpg)](https://assets.postman.com/postman-docs/accessing-saved-examples-1.jpg)

## How your examples appear in Postman documentation

You can publish Postman [API documentation](/docs/publishing-your-api/documenting-your-api/) to the web. Examples display in your API documentation and provide additional details and clarification for your API.

You can edit these examples with real-time updates to the documentation.

![how examples appear in documentation](https://assets.postman.com/postman-docs/Examples.jpg)

This behavior allows teams to mock an example request and response, in addition to simulating the endpoint using [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/). Front-end and back-end developers and testers can all begin working in parallel, based on the agreed-upon example.
