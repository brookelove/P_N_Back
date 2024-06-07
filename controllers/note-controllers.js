const { Notes } = require("../models");

const noteController = {
  //get all notes
  async getNotes(req, res) {
    try {
      const dbNotesData = await Notes.find()
        .select("-__v")
        .populate("artists")
        .populate("client");

      res.json(dbNotesData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single note by id
  async getSingleNote(req, res) {
    try {
      const dbNotesData = await Notes.findOne({
        _id: req.params.notesId,
      })
        .select("-__v")
        .populate("artists")
        .populate("client");

      if (!dbNotesData) {
        return res.status(404).json({ message: "No note with this id!" });
      }

      res.json(dbNotesData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new note
  async createNote(req, res) {
    try {
      const dbNotesData = await Notes.create(req.body);
      res.json(dbNotesData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a notes
  async updateNote(req, res) {
    try {
      const dbNotesData = await Notes.findOneAndUpdate(
        { _id: req.params.noteId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbNotesData) {
        return res.status(404).json({ message: "No notes with this id!" });
      }

      res.json(dbNotesData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete Notes
  async deleteNote(req, res) {
    try {
      const dbNotesData = await Notes.findOneAndDelete({
        _id: req.params.noteId,
      });

      if (!dbNotesData) {
        return res.status(404).json({ message: "No note with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = noteController;
