require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const StoryRepository = require('./repositories/StoryRepository');
const StoryServicce = require('./services/StoryService');
const StoryController = require('./controllers/StoryController');
const storyRoutes = require('./routes/story');
const config = require('./config/database');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool(config);

async function checkConnection() {
  try {
    const client = await pool.connect();
    console.log('Koneksi berhasil!');
    client.release();
  } catch (err) {
    console.error('Koneksi gagal:', err);
  }
}

checkConnection();

const storyRepository = new StoryRepository(pool);
const storyService = new StoryServicce(storyRepository);
const storyController = new StoryController(storyService);

app.use('/api', storyRoutes(storyController));

app.listen(process.env.PORT, () => {
  console.log(`server running on http:127.0.0.1:${process.env.PORT}`);
})