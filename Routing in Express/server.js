const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log("Server is running on the PORT 3000")
    app.get('/', (req, res) => {
        res.send("Welcome to the HOME Page ")
    })
    app.get("/about", (req, res) => {
        res.send("This is the About Page ");
    })
    app.get('/contact', (req, res) => {
        res.send("This is the Contact Page")
    })
    // app.get('/user/:id', (req, res) => {
    //     res.send(`User ID: ${req.params.id}`);
    // });
    app.get('/product/:id', (req, res) => {
        res.send(`Product ID: ${req.params.id}`);
    });

    app.get('/post/:id', (req, res) => {
        res.send(`Post ID: ${req.params.id}`);
    });
    app.get('/user/:id', (req, res) => {
        res.send(`Product ID:${req.params.id}`)
    });
    app.get('/route/:id', (req, res) => {
        res.send(`ROUTE ID${req.params.id}`);

    });
});