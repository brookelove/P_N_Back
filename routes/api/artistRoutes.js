const router = require("express").Router();
const {
  getArtists,
  getSingleArtist,
  createArtist,
  updateArtist,
  deleteArtist,
  addFriend,
  removeFriend,
} = require("../../controllers/artist-controller");

// /api/artists
router.route("/").get(getArtists).post(createArtist);

// /api/artists/:artistId
router
  .route("/:artistId")
  .get(getSingleArtist)
  .put(updateArtist)
  .delete(deleteArtist);

// /api/artists/:artistId/friends/:friendId
router
  .route("/:artistId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
