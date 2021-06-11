//console.log(global);

// global.setTimeout(() => {
//     console.log('I am devashish Vyas')
// }, 3000);
// setTimeout(()=>{
//     console.log(2+2);
//     clearInterval(int);
// },5000);

// const int= setInterval(() => {
//    console.log('yo'); 
// }, 1000);


// console.log(__dirname);
// console.log(__filename);

global.setTimeout(()=>{
    console.log('I am in kota');
    clearInterval(int);
},4000);

const int=global.setInterval(()=>{
    console.log('my name is devashish vyas');
},1000);