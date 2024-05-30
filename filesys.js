const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname, 'files/crud');
const filePath = `${dirPath}/apple.txt`;


// fs.writeFileSync(filePath,"This is a simple text file.")

// //reading file:
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// //appending an File:
// fs.appendFile(filePath,' and file name is apple.txt ',(err)=>{
//     if(!err) console.log("file is updated.")
// });

//Rename file name

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     console.log("File renamed successfully.")
// });

//-----deleting the record:

// fs.unlinkSync(`${dirPath}/fruit.txt`);

// // for (i = 0; i < 5; i++) {
// // // fs.writeFileSync(`Hello ${i}.txt`, "A Simple Text File.");
// // fs.writeFileSync(dirPath+"/hello "+i+".txt", "A Simple Text File.");
// // }
// // console.warn(dirPath);

// fs.readdir(dirPath,(error,files)=>{
//     files.forEach((items)=>{
//         console.log(`file name is ${items}`);
//     })
// });

// // const input = process.argv;

// // if (input[2] == 'add') {
// //     fs.writeFileSync(input[3], input[4]);
// // }
// // else if (input[2] == 'remove') {
// //     fs.unlinkSync(input[3]);
// // }
// // else {
// //     console.log("Invalid Output");
// // }
// // //to add file :: node .\filesys.js add output.txt 'this is a data file'
// // //to remove : node .\filesys.js remove output.txt