

// const fs = require("fs");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }

//     console.log(data);
// });
// const fs = require('fs')
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log("error ", err)
//         return;
//     }
//     console.log(data);
// })


// const fs = require('fs');
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log("there is an error", err)
//         return;
//     }
//     console.log(data)
// });

// const fs = require("fs");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     const words = data.split(" ");
//     console.log("Words:", words.length);
// });

// const fs = require('fs');
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     const words = data.split("");
//     console.log("this is the words", words.length);
// })


// Practicing the Stream Now
// const fs = require("fs");

// const stream = fs.createReadStream("test.txt", "utf-8");

// stream.on("data", (chunk) => {
//     console.log("CHUNK:", chunk);
// });

// stream.on("end", () => {
//     console.log("DONE READING FILE");
// });