//readfile

//const fs = require('fs');

// const fs=require('fs');

// fs.readFile('./dev.txt',(err,data)=>{//asyncronous function

//     if(err){
//         console.log(err);
//     }
//     //console.log(data);// only data will give a BUFFER string
//     console.log(data.toString());

// });

//console.log('last line'); // until js will readfile other commands in the code will get executed

// fs.readFile('./deva.txt',(err,data)=>{ // demo of error

//     if(err){
//         console.log(err);
//     }
//     //console.log(data);// only data will give a BUFFER string
//     console.log(data.toString());

// });


//write file

// fs.writeFile('./dev.txt','I am Devashish Vyas',()=>{
//     console.log('file is written');
// });

// fs.writeFile('./dev2.txt','Hello Again',()=>{  // if file not exist then it will create new file
//     console.log('new file created'); 
// });

//directories


// if(!fs.existsSync('./assets'))//check if directory is there or not
// {
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('directory created');
//     })
// }
// else{
//   fs.rmdir('./assets',(err)=>{
//      if(err){
//          console.log(err);
//      }
//      console.log('folder deleted');
//   })
// }


//deleting files

// if(fs.existsSync('./assets/deleteme.txt')){
//     fs.unlink('./assets/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }


