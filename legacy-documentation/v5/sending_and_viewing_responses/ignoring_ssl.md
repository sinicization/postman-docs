---

title: "Ignoring SSL warnings"
page_id: "ignoring_ssl"
tags: 
  - "mac"
warning: false

---

**注意:** For the Chrome app, check out [our blog post][1] on this subject.

In the native apps, you have the option of ignoring SSL certificates altogether. If your app complains when you hit a URL with an invalid certificate (when using a different CNAME, for example), you might want to give this a go.

1. Head to the Settings window, and go to the General tab.
2. Change the `SSL certificate verification` setting to Off.
3. Restart the app.

[![](https://www.postman.com/img/v1/docs/self_signed_certs/ignoring_1.png)][0]


[0]: https://www.postman.com/img/v1/docs/self_signed_certs/ignoring_1.png
[1]: https://blog.postman.com/using-self-signed-certificates-with-postman/
