const readthis = (a) => {
    const fs = require('fs');
    let read = fs.readFile(a, utf - 8, (data) => {
        console.log(data);
    })
}

const writethis = (a, b) => {
    const fs = require('fs');
    let write = fs.writeFile(a, b, () => {
        console.log("done");
    })
}

module.exports = { readthis, writethis }