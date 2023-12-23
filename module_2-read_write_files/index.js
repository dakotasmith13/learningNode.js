// TO READ, WRITE, APPEND TO FILE

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        // read info from file
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        // deleting file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        // write info to new file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        // append data to newly created file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        // rename file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        // read data from renamed file
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// utf8 states how data will be pulled in
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// prints first
// console.log('Hello...');

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

// callback hell
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })


// can put this within write file to ensure we don't write over
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text.', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// })