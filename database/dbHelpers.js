const db = require('./index.js');

const dbHelpers = {

  getAll: (callback) => {
    let queryStr = `SELECT * FROM inventory`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getOne: (req, callback) => {
    let { id } = req.params;
    let queryStr = `SELECT * FROM inventory WHERE id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  post: (req, callback) => {
    let { name, price, quantity } = req.body;
    let queryStr = `INSERT INTO inventory (name, price, quantity) VALUES ("${name}", ${price}, ${quantity})`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    })
  },

  update: (req, callback) => {
    let { newPrice } = req.body;
    let { id } = req.params;
    let queryStr = `UPDATE inventory SET price = ${newPrice} WHERE id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    })
  },

  delete: (req, callback) => {
    let { id } = req.params;
    let queryStr = `DELETE FROM inventory WHERE id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    })
  }

}

module.exports = dbHelpers;