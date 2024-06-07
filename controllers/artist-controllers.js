const { Artist, Work, Shop, Products, Money } = require("../models");

const artistController = {
  //get all artists
  async getArtists(req, res) {
    try {
      const dbArtistData = await Artist.find().select("-__v");

      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single artist by id
  async getSingleArtist(req, res) {
    try {
      const dbArtistData = await Artist.findOne({ _id: req.params.artistId })
        .select("-__v")
        .populate("friends")
        .populate("clients")
        .populate("work")
        .populate("license")
        .populate("shop");

      if (!dbArtistData) {
        return res.status(404).json({ message: "No Artist with this id!" });
      }

      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new artist
  async createArtist(req, res) {
    try {
      const dbArtistData = await Artist.create(req.body);
      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a artist
  async updateArtist(req, res) {
    try {
      const dbArtistData = await Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbArtistData) {
        return res.status(404).json({ message: "No artist with this id!" });
      }

      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete artist
  async deleteArtist(req, res) {
    try {
      const dbArtistData = await Artist.findOneAndDelete({
        _id: req.params.artistId,
      });

      if (!dbArtistData) {
        return res.status(404).json({ message: "No artist with this id!" });
      }
      await Money.deleteMany({ _id: { $in: dbArtistData.money } });
      await Products.deleteMany({ _id: { $in: dbArtistData.products } });
      await Shop.deleteMany({ _id: { $in: dbArtistData.shop } });
      await Work.deleteMany({ _id: { $in: dbArtistData.work } });
      res.json({ message: "Artist and associated work deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add friend to friend list
  async addFriend(req, res) {
    try {
      const dbArtistData = await Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbArtistData) {
        return res.status(404).json({ message: "No artist with this id!" });
      }

      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // remove friend from friend list
  async removeFriend(req, res) {
    try {
      const dbArtistData = await Artist.findOneAndUpdate(
        { _id: req.params.artistId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbArtistData) {
        return res.status(404).json({ message: "No artist with this id!" });
      }

      res.json(dbArtistData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = artistController;
