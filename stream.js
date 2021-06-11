const fs=require('fs');


const readstream=fs.createReadStream('./assets/text/doc.txt',{encoding:'utf8'});
const writestream=fs.createWriteStream('./assets/text/doc2.txt');
// readstream.on('data',(chunk)=>{
//     console.log('------NEW STREAM------');
//     console.log(chunk);
//     //if we add a second argument to createReadstream func then we do not need to add toString function ot chunk
//     writestream.write('--------New CHUNK-------');
//     writestream.write(chunk);
// });

//same thing can be done using PIPE in one line code

readstream.pipe(writestream);