// Asynchoruns system wise file delete
var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


if(req.url=="/delete"){

    fs.unlink('love.txt',function(error){

        if(error){
            res.writeHead(200,{'Content-Type':'txt/html'});
            res.write("File cant Delete");
        }
        else{
            res.writeHead(200,{'Content-Type':'txt/html'});
            res.write("File Deleted Successfully!");
        }
    });
}

});

server.listen(5050);
console.log("Server Run Successfull!");