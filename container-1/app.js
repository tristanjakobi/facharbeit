//todo: get port from dockers
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const OTHERURL = process.env.OTHERURL
const OWNURL = process.env.OWNURL


var express = require("express");
var app = express();

app.get(OWNURL, (req, res, next) => {
    axios.get(OTHERURL)
        .then(response => {
            if (response.status === 200) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500)
            }
        })
        .catch(err => {
            res.sendStatus(500);
        });

});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
