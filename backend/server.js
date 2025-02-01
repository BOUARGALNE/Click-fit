const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const uploadRoutes = require("./routes/upload");
const userRoutes = require("./routes/user");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); //sauvgared uploaded images

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/user", userRoutes);

// turn on server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server launched on http://localhost:${PORT}`));
