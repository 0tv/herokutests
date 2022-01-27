var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('fnf.run3.io'));

app.listen(8080);
