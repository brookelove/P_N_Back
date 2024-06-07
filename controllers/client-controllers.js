const { Client, Artist } = require("../models");

const clientController = {
  //get all clients
  async getClients(req, res) {
    try {
      const dbClientData = await Client.find().select("-__v");

      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single client by id
  async getSingleClient(req, res) {
    try {
      const dbClientData = await Client.findOne({ _id: req.params.clientId })
        .select("-__v")
        .populate("forms")
        .populate("notes");

      if (!dbClientData) {
        return res.status(404).json({ message: "No client with this id!" });
      }

      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new client
  async createClient(req, res) {
    try {
      const dbClientData = await Client.create(req.body);
      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a client
  async updateClient(req, res) {
    try {
      const dbClientData = await Client.findOneAndUpdate(
        { _id: req.params.clientId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbClientData) {
        return res.status(404).json({ message: "No client with this id!" });
      }

      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete client
  async deleteClient(req, res) {
    try {
      const dbClientData = await Client.findOneAndDelete({
        _id: req.params.clientId,
      });

      if (!dbClientData) {
        return res.status(404).json({ message: "No client with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add friend to friend list
  async addFriend(req, res) {
    try {
      const dbClientData = await Artist.findOneAndUpdate(
        { _id: req.params.clientId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbClientData) {
        return res.status(404).json({ message: "No client with this id!" });
      }

      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // remove friend from friend list
  async removeFriend(req, res) {
    try {
      const dbClientData = await Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbClientData) {
        return res.status(404).json({ message: "No artist with this id!" });
      }

      res.json(dbClientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = clientController;
