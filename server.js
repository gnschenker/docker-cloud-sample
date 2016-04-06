var express = require('express');
var app = express();
var _ = require('underscore');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  var name = process.env.MY_NAME || 'unknown';
  res.send('Express JS says "Hello ' + name + '"!');
});

var projects = [
  {"id":1, "name":"One"},
  {"id":2, "name":"Two"}
];

app.get('/projects', function(req, res){
  res.send(projects);
});

app.get('/projects/:id', function(req, res){
  res.send(_.find(projects, function(x){ return x.id == req.params.id; }));
});

var server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});

exports.closeServer = function(){
  server.close();
};