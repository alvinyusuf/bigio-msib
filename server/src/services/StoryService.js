class StoryServicce {
  constructor(storyRepository) {
    this.storyRepository = storyRepository;
  }

  async cek() {
    return this.storyRepository.cek;
  }

  async create(payload) {
    return this.storyRepository.create(payload);
  }

  async findAll() {
    return this.storyRepository.findAll();
  }
}

module.exports = StoryServicce;
