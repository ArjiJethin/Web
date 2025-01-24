const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
    res.send(
        "Home Page <br> http://localhost:9000/to <br> http://localhost:9000/from"
    );
});

app.get("/to", (req, res) => {
    res.send("To Page");
});

app.get("/from", (req, res) => {
    res.send("From Page");
});

app.get("*", (req, res) => {
    res.send("Hehehe");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
