const express = require("express");
const app = express();
const port = 3000;

app.length("/fsd", (req, res) => {
    res.send("Welcome to FSD");
});

app.listen(port, () => {
    console.log("Example app listening");
});
