const Album = require('../models/album.model');

// To Create an album or Post an Album
const createAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Retrieve or Get all Albums
const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Retrieve a single Album
const getAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id);
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update the Album details
const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndUpdate(id, req.body, { new: true });
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete an Album
const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndDelete(id);
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    res.status(200).json({ message: "Album Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createAlbum,
  getAlbums,
  getAlbum,
  updateAlbum,
  deleteAlbum
}
