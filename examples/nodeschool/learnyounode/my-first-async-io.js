var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;

    let content = data.toString();
    let no_of_lines = content.split('\n').length - 1;

    console.log(no_of_lines);
});
