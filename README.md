# vhosttest

A demonstration of how to create an express api and a server-rendered nextjs app on separate subdomains using `vhost`.

You need to add the subdomains manually in your machine's hosts file as it does not support wildcards.

---

api server on `api.vhosttest.com:3000`
user subdomains on `*.vhosttest.com:3000`

Generates a server rendered nextjs page for display.