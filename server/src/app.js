const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.CLIENT_URL
    ].filter(Boolean),
    credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Core Inventory Backend Running 🚀"
    });
});

app.use("/api/auth", authRoutes);

module.exports = app;