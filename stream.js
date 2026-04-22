
//Practicing the Stream Now
// const fs = require("fs");

// const stream = fs.createReadStream("test.txt", "utf-8");

// stream.on("data", (chunk) => {
//     console.log("CHUNK:", chunk);
// });

// stream.on("end", () => {
//     console.log("DONE READING FILE");
// });
// const fs = require('fs');
// const stream = fs.createReadStream('test.txt', 'utf-8');
// stream.on("data", (chunk) => {
//     console.log("chunk", chunk);
// });
// stream.on("end", () => {
//     console.log("Done Reading File");
// });
// const fs = require('fs');
// const stream = fs.createReadStream('test.txt', 'utf-8');
// stream.on("data", (chunk) => {
//     console.log("CHunk", chunk);

// });
// stream.on("end", () => {
//     console.log("Done reading the file")
// });



// const fs = require("fs");

// const readStream = fs.createReadStream("test.txt");
// const writeStream = fs.createWriteStream("copy.txt");

// readStream.pipe(writeStream);
const fs = require('fs');
const readStream = fs.createReadStream