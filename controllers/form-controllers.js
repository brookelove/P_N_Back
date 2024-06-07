const { Form } = require("../models");

const formController = {
  // get all forms
  async getForms(req, res) {
    try {
      const dbFormData = await Form.find().sort({ createdAt: -1 });

      res.json(dbFormData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single form by id
  async getSingleForm(req, res) {
    try {
      const dbFormData = await Form.findOne({
        _id: req.params.formId,
      })
        .select("-__v")
        .populate("artist")
        .populate("client");

      if (!dbFormData) {
        return res.status(404).json({ message: "No form with this id!" });
      }

      res.json(dbFormData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a form
  async createForm(req, res) {
    try {
      const dbFormData = await Form.create(req.body);

      const dbClientData = await Client.findOneAndUpdate(
        { _id: req.body.clientId },
        { $push: { forms: dbFormData._id } },
        { new: true }
      );

      if (!dbClientData) {
        return res
          .status(404)
          .json({ message: "Form created but no client with this id!" });
      }

      res.json({ message: "Form successfully created!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update form
  async updateForm(req, res) {
    const dbFormData = await Form.findOneAndUpdate(
      { _id: req.params.FormId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!dbFormData) {
      return res.status(404).json({ message: "No form with this id!" });
    }

    res.json(dbFormData);

    console.log(err);
    res.status(500).json(err);
  },
};

module.exports = formController;
