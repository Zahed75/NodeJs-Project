const { write } = require('fs');
var http=require('http');
var URL=require('url');

var server=http.createServer(function(req,res){




    if(req.url=="/"){
        // res.writeHead(200,{'Content-Type':'text/html'})
        // res.write('<h1>Home Page</h1>')
        // res.end();

        // URL SPLIT
    var myURL="http://api.server.onnow.io/swagger?year=2020&month=july";
    var myURLObj=URL.parse(myURL,true)
    var myHostName=myURLObj.host;
    var mypathName=myURLObj.path;
    var mySearchName=myURLObj.search;
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(mySearchName);
    res.end();
    }

    else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Home about Page</h1>')
        res.end();
    }


});

server.listen(5050);
console.log("Server Run Successfully!"); 