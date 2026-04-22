// server.js
const express = require("express");
const app = express();

// 🔹 Middleware 1: JSON parser (built-in)
app.use(express.json());

// 🔹 Middleware 2: Logger (custom)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 🔹 Home Route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// 🔹 Login Route
app.get("/login", (req, res) => {
    res.send("Login Page");
});

// 🔹 Custom Auth Middleware
const auth = (req, res, next) => {
    if (req.query.user === "admin") {
        next();
    } else {
        res.status(401).send("Unauthorized ❌");
    }
};

// 🔹 Protected Route
app.get("/profile", auth, (req, res) => {
    res.send("Welcome to your profile 👤");
});

// 🔹 POST Route (test JSON)
app.post("/data", (req, res) => {
    console.log(req.body);
    res.send("Data received ✅");
});

// 🔹 Error Route (for testing)
app.get("/error", (req, res) => {
    throw new Error("Something broke 💥");
});

// 🔹 Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// 🔹 Server Listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});