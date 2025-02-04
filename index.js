import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
app.use("/", indexRoutes);

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
