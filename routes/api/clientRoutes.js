const router = require("express").Router();
const {
  getClients,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient,
  addFriend,
  removeFriend,
} = require("../../controllers/client-controllers");

// /api/client
router.route("/").get(getClients).post(createClient);

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
