// NODEMON npm module - reruns file when changes AS DEV DEPENDENCY: npm i nodemon -D
// DATE-FNS npm module - date functions

const { format } = require('date-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
