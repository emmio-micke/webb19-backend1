const fs = require('fs')
const path = require('path');

fs.readdir(process.argv[2], (err, data) => {
    if (err) throw err;

    let files = data.toString().split(',')

    for(file of files) {
        if ('.' + process.argv[3] == path.extname(file)) {
            console.log(file)
        }
    }
})
