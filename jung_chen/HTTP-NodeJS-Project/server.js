var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');


var server = http.createServer(function(request, response) {
 
    var url = request.url;

    if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the puppies page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-2') {
        fs.readFile('page-2.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the Movies page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-3') {
        fs.readFile('page-3.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the sports page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-4') {
        fs.readFile('page-4.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the cartoons page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-5') {
        fs.readFile('page-5.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the memes page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-6') {
        fs.readFile('page-6.html', function(err, data) {
            response.write('<br><center><h1><font color="white">Welcome to the search page</font></h1></center><br>');
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/main.css') {
        fs.readFile('main.css', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    }else if (url === '/gifs/ZhGEqAP.jpg') {
        fs.readFile('./gifs/ZhGEqAP.jpg', function(err, data) {
        	response.writeHead(200, {"Content-Type": "image/jpeg"})
            response.write(data);
            response.end();
        })
    }else if (url === '/app.js') {
        fs.readFile('app.js', function(err, data) {
            response.write(data);
            response.end();
        })
    }
    else {
        response.write('<h1>404</h1><br><p>Page not found</p>');
        response.end();
    }
});


  server.listen(3000, function(){
    console.log("Listening to port 3000")
  })
