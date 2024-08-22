const express = require('express');

function storyRoutes(storyController) {
  const router = express.Router();

  router.get('/', storyController.cek.bind(storyController));
  router.post('/story', storyController.addStory.bind(storyController));
  router.get('/story', storyController.getStories.bind(storyController));

  return router;
}

module.exports = storyRoutes;