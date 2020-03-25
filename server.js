require("dotenv").config(
  process.env.APP_TYPE === "dev"
    ? {
        path: "./dev.env"
      }
    : { path: "./prod.env" }
);
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.APP_TYPE !== "prod";
const app = next({ dev });
const handle = app.getRequestHandler();
global.fetch = require("isomorphic-unfetch");

// TODO add module-alias packet
// require('module-alias').addAlias('src', __dirname);

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/") {
      //custom request behavior
      app.render(req, res, "/", query);
    } else if (pathname === "/about") {
      app.render(req, res, "/about", query);
    } else if (pathname === "/contact") {
      app.render(req, res, "/contact", query);
    } else if (pathname === "/order") {
      app.render(req, res, "/order", query);
    } else if (pathname === "/catalog") {
      app.render(req, res, "/catalog", query);
    } else {
      //request else as usual
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
