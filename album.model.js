const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema(
  {
    albumName: {
      type: String,
      required: [true, 'Please enter the album name:']
    },
    artist: {
      type: String,
      required: [true, 'Please enter the artist name:']
    },
    genre: {
      type: String,
      required: [true, 'Please enter the genre:']
    },
    releaseYear: {
      type: Number,
      required: [true, 'Please enter the release year:']
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Album = mongoose.model('Albums', AlbumSchema);

module.exports = Album;
