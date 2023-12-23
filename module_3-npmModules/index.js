// NODEMON npm module - reruns file when changes AS DEV DEPENDENCY: npm i nodemon -D
// DATE-FNS npm module - date functions
// UUID npm module - generate unique ids


// In package.json, ^ means allow updates to minor versions and patches, but not major versions
// ~ means allow updates to only patches
// * means use newest version every time (no version value after)
// 8.2.3 MAJOR VERSION MINOR VERSION PATCH
// can use @ symbol when installing to specify version to install
// use npm update to check for updates for packages

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());


