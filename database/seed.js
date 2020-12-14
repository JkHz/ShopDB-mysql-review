const db = require('./index.js');

const items = [
  {
    name: 'Acoustic Guitar',
    price: 300,
    quantity: 12,
  },
  {
    name: 'Trumpet',
    price: 150,
    quantity: 8,
  },
  {
    name: 'Drum Set',
    price: 1200,
    quantity: 4,
  },
  {
    name: 'Fender Strat',
    price: 600,
    quantity: 15,
  },
  {
    name: 'MIDI Keyboard',
    price: 1100,
    quantity: 8,
  },

];

const seeder = () => {

  items.forEach(item => {
    let queryStr = `INSERT INTO inventory (name, price, quantity) VALUES ("${item.name}", ${item.price}, ${item.quantity})`

    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(`Seed failed: `, err);
      } else {
        console.log(`added ${item.name} to inventory`)
      }
    })
  })
  db.end();
};

seeder();