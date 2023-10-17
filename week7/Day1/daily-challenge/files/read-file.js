let fs = require('fs');
let reading = fs.readFileSync('file-data.txt', 'utf-8');
module.exports = reading