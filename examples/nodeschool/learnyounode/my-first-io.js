if (process.argv.length > 2) {
    const fs = require('fs');

    let file = fs.readFileSync(process.argv[2]);
    let content = file.toString();
    let no_of_lines = content.split('\n').length - 1;

    console.log(no_of_lines);
}
