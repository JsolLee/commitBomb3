// backend-server/models/news.model.js

const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
