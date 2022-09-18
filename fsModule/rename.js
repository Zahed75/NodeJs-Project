var fs=require('fs');

var http=require('http');


var server=http.createServer(function(req,res){


    if (req.url=="/"){
         fs.rename('pain.txt','love.txt',function(error){

            if(error){
            res. writeHead(200,{'Content-Type':'txt/html'});
            res.write("File didn't rename failed!!");
            res.end();

            }

            else{
            res. writeHead(200,{'Content-Type':'txt/html'});
            res.write("File write successfully!");
            res.end();
            }
            
        });
    }
    
});


server.listen(5050)

console.log("Server run successfully!")








