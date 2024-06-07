const router = require("express").Router();
const {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../../controllers/notes-controller");

// /api/notes
router.route("/").get(getNotes).post(createNote);

// /api/notes/:notesId
router.route("/:notesId").get(getSingleNote).put(updateNote).delete(deleteNote);

module.exports = router;
