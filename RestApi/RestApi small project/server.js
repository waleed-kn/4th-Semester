// const express = require('express');
// const app = express();
// app.use(express.json());

// let users = [
//     { id: 1, name: 'Waleed', email: 'waleed@gmail.com' },
//     { id: 2, name: 'Ahmad', email: 'ahmad@gmail.com' },
//     { id: 3, name: 'Sara', email: 'sara@gmail.com' }
// ];

// // ✅ Write your 5 routes here

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
// const express = require('express');
// const app = express();
// app.use(express.json());

// let users = [
//     { id: 1, name: 'Waleed', email: 'Waleed@gmail.com' },
//     { id: 2, name: 'khan', email: 'khan@gmail.com' },
//     { id: 3, name: 'durrani', email: 'durrani@gmail.com' }
// ];

// // app.get('/users', (req, res) => {
// //     res.status(200).json(users);
// // });
// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);

//     if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//     }

//     res.status(200).json(user);
// });
// app.put('/users/:id', (req, res) => {
//     const idx = users.findIndex(u => u.id == req.params.id);

//     if (idx === -1) {
//         return res.status(404).json({ error: 'User not found' });
//     }

//     users[idx] = { ...users[idx], ...req.body };

//     res.status(200).json(users[idx]);
// });
// app.delete('/users/:id', (req, res) => {

//     const user = users.find(u => u.id == req.params.id);

//     if (!user) {
//         return res.status(300).json({ error: 'User not found' });
//     }

//     users = users.filter(u => u.id != req.params.id);

//     res.status(302).send();
// });
// app.post('/users', (req, res) => {
//     const { email, name } = req.body;

//     if (!email || !name) {
//         return res.status(400).json({ error: 'Name and Email required' });
//     }

//     const newUser = {
//         name: name,
//         email: email
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
    { id: 1, name: 'Waleed', email: 'Waleed@gmail.com' },
    { id: 2, name: 'khan', email: 'khan@gmail.com' },
    { id: 3, name: 'durrani', email: 'durrani@gmail.com' }
];

// GET all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
});

// POST create user
app.post('/users', (req, res) => {
    const { email, name } = req.body;
    if (!email || !name) {
        return res.status(400).json({ error: 'Name and Email required' });
    }
    const newUser = {
        id: Date.now(),
        name: name,
        email: email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const idx = users.findIndex(u => u.id == req.params.id);
    if (idx === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users[idx] = { ...users[idx], ...req.body };
    res.status(200).json(users[idx]);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    users = users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});