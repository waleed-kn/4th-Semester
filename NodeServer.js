// const http = require('http');
// const Server = http.createServer((req, res) => {
//     res.end("Hello from the server ");
// });
// Server.listen(3000, () => {
//     console.log("server is running on port 3000");
// })

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/" && req.method === "GET") {
//         res.end("Home Page");
//     }

//     else if (req.url === "/about" && req.method === "GET") {
//         res.end("About Page");
//     }

//     else if (req.url === "/contact" && req.method === "GET") {
//         res.end("Contact Page");
//     }

//     else {
//         res.end("404 Not Found");
//     }
// });

// server.listen(3000);
const http = require("http");

const server = http.createServer((req, res) => {

    const data = {
        name: "Waleed",
        skill: "Node.js",
        status: "Learning Raw Server"
    };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});

server.listen(5000);