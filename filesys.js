const fs = require('fs');

const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
}
else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
}
else {
    console.log("Invalid Output");
}
//to add file :: node .\filesys.js add output.txt 'this is a data file'
//to remove : node .\filesys.js remove output.txt