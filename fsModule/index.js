// Asynchorunus System!!!!!
// var fs=require('fs');
// var http=require('http');


// var server=http.createServer(function(req,res){

//  if (req.url=="/"){
    
//     fs.readFile('home.html',function(error,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
       
//         res.end();
//     });  //asynchrouns system! 

//  }

// });


// Synchrouns System
var fs=require('fs');
var http=require('http');


var server=http.createServer(function(req,res){

 if (req.url=="/"){
    
   let mydata= fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
       
        res.end();
     //asynchrouns system! 

 };

});


server.listen(4040);
console.log("Server Run Successfully!")