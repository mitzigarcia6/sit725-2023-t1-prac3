var express = require('express');
app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port  = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running at port ' + port);
});