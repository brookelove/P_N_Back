const router = require("express").Router();
const {
  getClient,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient,
  addFriend,
  removeFriend,
} = require("../../controllers/client-controller");

// /api/client
router.route("/").get(getClient).post(createClient);

// /api/client/:clientId
router
  .route("/:clientId")
  .get(getSingleClient)
  .put(updateClient)
  .delete(deleteClient);

// /api/client/:clientId/friends/:friendId
router
  .route("/:clientId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
