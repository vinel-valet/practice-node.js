/* import
const user = require('./test');
const os = require('os');

console.log(os.platform(), os.release())
console.log(user);*/




/*reading, writing and deleting files*/

const fs = require('fs');
fs.readFile('./test.js', 'utf8', (error, data) => {
    console.log(data);

    fs.writeFile('./test2.js', data, ()=> {})
});
setTimeout(()=> {
    fs.unlink('./test2.js', ()=> {})
}, 4000)