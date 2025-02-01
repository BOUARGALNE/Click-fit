const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const uploadRoutes = require("./routes/upload");
const userRoutes = require("./routes/user");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Servir les fichiers uploadés

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/user", userRoutes);

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
