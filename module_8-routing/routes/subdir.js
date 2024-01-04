const express = require('express');
const router = express.Router();
const path = require('path');

router.get("^/$|/index(.html)?", (req, res) => {
    // begin w/ a slash and end with a slash, or index.html
    res.sendFile(path.join(__dirname, "..", "views", "subdir","index.html"));
});

router.get("/test(.html)?", (req, res) => {
    // begin w/ a slash and end with a slash, or index.html
    res.sendFile(path.join(__dirname, "..", "views", "subdir","index.html"));
});

module.exports = router;