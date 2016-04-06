var request = require("request");
var app = require("../server.js")
var base_url = "http://localhost/"
describe("Hello World Test", function(){
  describe("GET /", function() {

    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    
    it("Greets me", function(done){
      request.get(base_url, function(error, response, body) {
        expect(response.body.indexOf('Express JS says')).not.toBe(-1);
        done();
      });
    });
    
    var projects = [
      {"id":1, "name":"One"},
      {"id":2, "name":"Two"},
    ];
    
    it("Returns projects", function(done){
      request.get(base_url+'projects', function(error, response, body) {
        var result = JSON.parse(response.body);
        expect(result).toEqual(projects);
        done();
      });
    });
    
    it("Returns single project", function(done){
      request.get(base_url+'projects/1', function(error, response, body) {
        var result = JSON.parse(response.body);
        expect(result).toEqual(projects[0]);
        done();
      });
    });

    // HACK: afterAll
    it("Should close server", function(){
       app.closeServer();
    })
  });
});
