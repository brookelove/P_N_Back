const { License } = require("../models");

const licenseController = {
  //get all license
  async getLicense(req, res) {
    try {
      const dbLicenseData = await License.find().select("-__v");

      res.json(dbLicenseData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single license by id
  async getSingleLicense(req, res) {
    try {
      const dbLicenseData = await License.findOne({
        _id: req.params.licenseId,
      });

      if (!dbLicenseData) {
        return res.status(404).json({ message: "No license with this id!" });
      }

      res.json(dbLicenseData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new license
  async createLicense(req, res) {
    try {
      const dbLicenseData = await License.create(req.body);
      res.json(dbLicenseData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a license
  async updateLicense(req, res) {
    try {
      const dbLicenseData = await License.findOneAndUpdate(
        { _id: req.params.licenseId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbLicenseData) {
        return res.status(404).json({ message: "No license with this id!" });
      }

      res.json(dbLicenseData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete License
  async deleteLicense(req, res) {
    try {
      const dbLicenseData = await License.findOneAndDelete({
        _id: req.params.LicenseId,
      });

      if (!dbLicenseData) {
        return res.status(404).json({ message: "No license with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = licenseController;
