// Write operations asynchronus
// var fs=require('fs');
// var http=require('http');


// var server=http.createServer(function(req,res){

//  if (req.url=="/about"){
    
//     fs.writeFile('demo.txt','more jabo re more jabo,ki osohay ami akabar vabo? tomake chere jabo kothay!',function(error){
//        if(error){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("FIle Write Failed!!");
//         res.end();
//        }

//        else{
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("File Write Successful!");
//         res.end();
//        }
        
//     });  

//  }

// });

// Sysnchronus write file operations



var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){

    if(req.url=="/next"){
        let error=fs.writeFileSync('pain.txt','amar mote tor moton kew nai!');
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Failed");
            res.end();
        }
        
    }
    
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File Write SuccessFully");
        res.end();
    }
});



server.listen(4040);
console.log("Server Run Successfully!")