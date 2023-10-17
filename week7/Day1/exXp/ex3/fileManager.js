const fs = require('fs');

const readthis = (a) => {
  // const fs = require('fs');
  // !! require import en basda qeyd olunur / globalda
  let read = fs.readFile(a, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

const writethis = (a, b) => {
  // const fs = require('fs');
  let write = fs.writeFile(a, b, () => {
    console.log('done');
  });
};

module.exports = { readthis, writethis };
