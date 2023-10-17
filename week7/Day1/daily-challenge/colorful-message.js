// function colorFul(colors) {
//     text = 'hello world';
//     return text
// }

// !!! solution

const chalk = require('chalk');

function colorFul(message) {
  const message = chalk.bold.green(message);
  console.log(message);
}

// !!!

export default colorFul