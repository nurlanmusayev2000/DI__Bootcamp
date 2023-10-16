const fs = require('fs');
fs.writeFile(write_file.js, (err) => {
    if (err) {
        console.log(err);
    } else { console.log("done"); }
})