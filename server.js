const http = require('http');
const fs= require('fs');
const _ = require('lodash');
const server=http.createServer((req,res)=>{
// console.log(req.url, req.method);

const num = _.random(0,20);
console.log(num);
//set heasder content type
res.setHeader('Content-Type','text/html');
// res.write('hello world');
// res.end();
let path='./views';

switch(req.url){
    case'/':
    path+='/Index.html';
    res.statusCode = 200;
    break;
    case'/about':
    path+='/about.html';
    res.statusCode = 200;
    break;
    case'/about-us':
    res.setHeader('Location','/about');
    res.statusCode = 301;
    break;
    default:
        path+='/404.html';
        res.statusCode = 404;
        break;

}
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{res.write(data);
        res.end();
    }
});


});


server.listen(3000,'localhost',()=>{
    console.log('lsitening for request on port 3000')
});

 