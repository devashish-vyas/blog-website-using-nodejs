const http=require('http');
const fs=require('fs');
const _=require('lodash');


const server=http.createServer((req,res)=>{
    // let num=_.random(0,20); // demo of lodash
    // console.log(num);

    // const greet=_.once(()=>{
    //     console.log('Hello');
    // });

    // greet();
    // greet();

 //console.log(req.url, req.method);
 //set header content type

//  res.setHeader('Content-Type','text/plain');//to send plain text
//  res.write("Hello World!!");
//  res.end();

//  res.setHeader('Content-Type','text/html');
//  res.write('<p>Hello World</p>');
//  res.end();

//returning html to browser
// res.setHeader('Content-Type','text/html');

// fs.readFile('./views/home.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         res.end();
//     }
//     else
//     {
//         //res.write(data);
//         res.end(data);//does the same thing but just works when you have to pass only one thing
//     }
// });

//setting up a routing sysytem using switch statement

let path='./views/';

switch(req.url){

    case '/':
        path+='home.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode=200;
        break;
    case '/about-us':
       res.statusCode=301;
       res.setHeader('Location','/about');
       res.end();
       break;
    default:
        path+='404.html';
        res.statusCode=404 
        break;   
}

res.setHeader('Content-Type','text/html');

fs.readFile(path,(err,data)=>{
 if(err){
     console.log(err);
     res.end();
 }
 else{
     res.write(data);
     res.end();
 }
});

});



server.listen(3000,'localhost',()=>{
    console.log('port is listening at port 3000');
});







