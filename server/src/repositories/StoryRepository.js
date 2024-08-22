const Story = require("../models/Story");

class StoryRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async cek() {
    const payload = {
      id: 1,
      title: "filosofi teras",
      author: "heri manampiring",
      synopsis: "seneca ...",
      category: "self-dev",
      story_cover: "gambar.png",
      tags: ["heri", "teras"],
      status: "publish",
    };
    return new Story(payload);
  }

  async create(payload) {
    const { title, author, synopsis, category, story_cover, tags, status } =
      payload;
    const query =
      "INSERT INTO stories (title, author, synopsis, category, story_cover, tags, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [title, author, synopsis, category, story_cover, tags, status];
    const result = await this.pool.query(query, values);
    return new Story(result.rows[0]);
  }

  async findAll() {
    const query = "SELECT * FROM stories";
    const result = await this.pool.query(query);
    return result.rows.map((row) => new Story(row));
  }
}

module.exports = StoryRepository;
