var app = require('express')();

app.use(express.static('public'));
app.use(express.static('charts'));

app.listen(8080);
