// console.log("Start");
// setTimeout(() => {
//     console.log("TimeOut 1 ")
// }, 1000);
// setTimeout(() => {
//     console.log("TimeOut 2")
// }, 0);
// console.log("End");

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3");
// });

// console.log("4");

//const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("Request received");

//     setTimeout(() => {
//         console.log("Heavy task done");
//     }, 5000);

//     res.end("Response sent");
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log("Request Has Been Recived");
//     setTimeout(() => {
//         console.log("Heavy Task Has Been Done")
//     }, 5000);
//     res.end("response Been Send Back");
// });
// server.listen(3000, () => {
//     console.log("I This is the server");
// })




//Practicing on the NodeJs

const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Response has been sen backk safely");
    setTimeout(() => {
        console.log("Heavy Task Has been Delivered Lately");
    }, 5000);
    res.end("This is the response");
});
server.listen(3000, () => {
    console.log("this the server of it");
});