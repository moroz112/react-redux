var express = require('express');
var app = express();

app.use('/', express.static(__dirname));
app.listen(8080, function() {
    console.log("Server started at port 8080")
});