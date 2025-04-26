const express = require("express");
const { getAlbums, createAlbum, getAlbum, updateAlbum, deleteAlbum } = require("../controller/album.controller");
const router = express.Router();

router.post('/', createAlbum);
router.get('/', getAlbums);
router.get('/:id', getAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;
