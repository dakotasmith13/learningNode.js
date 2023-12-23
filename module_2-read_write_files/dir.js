// CREATE NEW DIRECTORY & CHECK IF EXISTS

const fs = require('fs');

// if directory does not exist already
if (!fs.existsSync('./new')) {
// create new directory
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}

if (fs.existsSync('./new')) {
    // delete directory
        fs.rmdir('./new', (err) => {
            if (err) throw err;
            console.log('Directory removed');
        });
    }