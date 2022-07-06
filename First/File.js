
//read file
const fs = require('fs');
// fs.readFile('./docs/file.txt',(err,data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// });

// does not block the code

//writing files
fs.writeFile('./docs/file.txt', 'Hello world',()=>{
    console.log('file was written');
});

fs.writeFile('./docs/filex.txt', 'Hello world',()=>{
    console.log('file was written');
});

// fs.readFile('./docs/file.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
//     });
    
