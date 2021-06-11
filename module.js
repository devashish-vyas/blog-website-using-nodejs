//const xyz= require('./people'); // also runs the file
//console.log(xyz);
//xyz is an empty object
//xyz is an empty objet untile we export the varible from the file using module.export

//console.log(people);//cannot access interval in the imported file using require

//console.log(xyz.people);
//console.log(xyz.ages);

// const {people} =require('./people');
// console.log(people);
// console.log(ages)//gives error


//const {people,ages}=require('./people');//this is called destructuring
//console.log(people);
//console.log(ages);
const os=require('os')//in built module

//console.log(os);
console.log(os.platform() , os.homedir());

