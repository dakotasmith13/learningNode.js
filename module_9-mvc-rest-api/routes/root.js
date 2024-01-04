const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  // begin w/ a slash and end with a slash, or index.html
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html")); // Middleware
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); // sends 302 by default, we want 301 (permanent)
});

module.exports = router;
