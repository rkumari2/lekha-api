import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from "path";

const dbPath = path.join(__dirname, "database.json");

export const loadDatabase = () => {
  const raw = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(raw);
};

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const db = loadDatabase();

app.get("/", (_req, res) => {
  res.json(db);
});

app.get("/blogs", (req, res) => {
  res.json(db.blogs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
