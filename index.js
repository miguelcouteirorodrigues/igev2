var express = require('express');
var app = express();

/* app.get('/', function(request, response){
    app.use(express.static('client'));
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
 }) */

app.use(express.static(__dirname + '/client'));

app.get('/json/us.json', function(req, res){
    var response = {
          result: 'success',
          upload: req.uploadLink,
          message: 'File uploaded!'
      };
    res.send(response)
  });
  
app.listen(8081);