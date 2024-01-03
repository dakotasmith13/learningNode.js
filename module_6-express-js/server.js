const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.get("^/$|/index(.html)?", (req, res) => {
  // begin w/ a slash and end with a slash, or index.html
  // res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); // sends 302 by default, we want 301 (permanent)
});

// Route handlers (req, res) anon function are route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next(); // moves on to next handler
  },
  (req, res) => {
    res.send("Hellow world!");
  }
);

// chaining route handlers
const one = (req, res, next) => {
  console.log("one");
  next();
}

const two = (req, res, next) => {
  console.log("two");
  next();
}

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
}

app.get('/chain(.html)?', [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
