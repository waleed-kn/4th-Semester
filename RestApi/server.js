// const express = require('express');
// const app = express();
// app.use(express.json());

// // In-memory data (no database needed for practice)
// let users = [
//     { id: 1, name: 'Ali', email: 'ali@gmail.com' },
//     { id: 2, name: 'Ahmad', email: 'ahmad@gmail.com' }
// ];

// // ✅ YOUR ROUTES WILL GO HERE

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
// const express = require('express');
// const app = express();
// app.use(express.json());
// let users = [
//     { id: 1, name: 'Waleed', email: 'waleed@gmail.com' }
// ];
// app.get('/users', (req, res) => {
//     res.status(200).json(users);
// });
// app.post('/users', (req, res) => {
//     const newUser = {
//         id: Date.now(),
//         name: req.body.name,
//         email: req.body.email
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });
// app.listen(3000, () => {
//     console.log('Server is running on 3000');
// });

const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Waleed', email: 'waleed@gmail.com' }
];

// GET all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// POST create user
app.post('/users', (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});