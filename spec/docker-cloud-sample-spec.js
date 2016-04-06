var request = require("request");
var app = require("../server.js")
var base_url = "http://localhost:3000/"
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
        expect(response.body).toBe("Express JS says \"Hello unknown\"!");
        app.closeServer();
        done();
      });
      
    });
  });
});
