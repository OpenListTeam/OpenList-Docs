---
top: 675
categories:
  - guide
  - drivers
---

# WPS

<!--@include: @/en/snippets/reverse-tip.md-->

OpenList supports mounting WPS cloud document (which is also called KDocs) web.

Official websites:

- KDocs (Personal): <https://www.kdocs.cn/>
- WPS 365 (Business/Enterprise/Education): <https://365.kdocs.cn/>

## Cookie

::: warning
Please make sure to obtain the Cookie using a new browser environment or incognito mode to avoid including session information from other accounts.

A session can only be logged in to one account at a time.
:::

The cookie of WPS cloud storage can be obtained by following the steps below:

1. Create a new browser environment or open an incognito window.
2. Visit the corresponding WPS cloud document website and log in to your WPS account.
3. Open the developer tools (press F12 or right-click and select "Inspect").
4. Go to the "Network" tab and refresh the page.
5. Search for `islogin` in the network requests and open one of them.
6. In the request details, find the "Headers" section and look for the `Cookie` and `User-Agent` fields.
7. Copy the entire value of relevant fields and use them in OpenList.

## Mode

There are two modes of API:

- Personal
- Business

Please select the appropriate mode based on your account type when adding the WPS cloud storage in OpenList.

## Custom UA

You can set a custom User-Agent for requests to WPS cloud document.
