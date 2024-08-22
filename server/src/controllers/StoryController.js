class StoryController {
  constructor(storyService) {
    this.storyService = storyService;
  }

  async cek(req, res) {
    try {
      const response = this.storyService.cek();
      res.send(200).json(response);
    } catch (error) {
      res.send(500);
    }
  }

  async addStory(req, res) {
    try {
      const { tags } = req.body;
      const jsonTag = JSON.stringify(tags);
      const payload = {
        ...req.body,
        tags: jsonTag,
      }
      const story = await this.storyService.create(payload);
      res.status(201).json(story);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getStories(req, res) {
    try {
      const stories = await this.storyService.findAll();
      res.status(200).json(stories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = StoryController;