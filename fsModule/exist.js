var fs=require('fs')
var http =require('http')

var server=http.createServer(function(req,res){

    if(req.url=="/"){
        fs.existsSync('hate.txt',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Not found that you are looking for");
                res.end("False");
            }

            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Found!");
                res.end("True");
            }
        })
    }
})

server.listen(4040);
console.log("Server Run SuccessFully!");