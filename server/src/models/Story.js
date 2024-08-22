class Story {
  constructor(payload) {
    const { id, title, author, synopsis, category, story_cover, tags, status  } = payload;

    this.id = id;
    this.title = title;
    this.author = author;
    this.synopsis = synopsis;
    this.category = category;
    this.story_cover = story_cover;
    this.tags = tags;
    this.status = status;
  }
}

module.exports = Story;