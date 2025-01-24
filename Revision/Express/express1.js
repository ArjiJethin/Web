const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});

app.listen(port, () =>
    console.log("Express listening on http://localhost:" + port)
);
