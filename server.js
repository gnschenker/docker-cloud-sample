var express = require('express');
var app = express();
var _ = require('underscore');
var port = 80;  //process.env.PORT || 3000;

app.get('/', function (req, res) {
  var name = process.env.NAME || 'You';
  var host = process.env.HOSTNAME;
  var body = 
    '<h1>Express JS says</h1> \
     <p>Hello ' + name + '!</p> \
     <p>Hostname: '+host;
  res.send(body);
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