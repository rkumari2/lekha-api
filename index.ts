import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, 'database.json');

export const loadDatabase = () => {
  const raw = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(raw);
};


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const db = 

app.get('/', (_req, res) => {
  const db = loadDatabase()

  res.json(db)
});

app.get('/blogs', (req, res) => {
    const db = loadDatabase()

    res.json(db.blogs)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
