const fs = require('fs');

// fs.readFile('File.txt', 'utf8', (err, data)=> {
//     console.log(err,data);
// })

// const a = fs.readFileSync('File.txt')
// console.log(a.toString())


// fs.writeFile('File.txt', "This is a data", ()=> {
//     console.log("Written to the file.")
// })


b = fs.writeFileSync('File.txt', "This is a data3")


console.log("Finished reading file...")