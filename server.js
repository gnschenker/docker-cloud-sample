var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
  var name = process.env.MY_NAME || 'unknown';
  res.send('Express JS says "Hello ' + name + '"!');
});

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});