// TODO: create controller functions
const dbHelpers = require('../database/dbHelpers.js');

const controllers = {

  getAll: (req, res) => {
    dbHelpers.getAll((err, results) => {
      if (err) {
        res.status(404).send(err)
      }
      else {
        res.status(200).send(results)
      }
    })
  },

  getOne: (req, res) => {
    dbHelpers.getOne(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  post: (req, res) => {
    dbHelpers.post(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(`${req.body.name} added to inventory.`);
      }
    })
  },

  updateOne: (req, res) => {
    dbHelpers.update(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(`Item price updated.`);
      }
    })
  },

  deleteOne: (req, res) => {
    dbHelpers.delete(req, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(`Item removed from inventory`)
      }
    })
  }

};

module.exports = controllers;