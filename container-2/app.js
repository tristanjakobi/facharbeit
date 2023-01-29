const PORT = process.env.PORT;
const HOST = process.env.HOST;
const OWNURL = process.env.OWNURL


var express = require("express");
var app = express();

app.get(OWNURL, (req, res, next) => {
    res.sendStatus(200);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
