const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./buffer-text.txt')
const writeStream = fs.createWriteStream('./buffer-new-text.txt')
const compressStream = zlib.createGzip();



/*
readStream.on('data', (chunk)=> {
    writeStream.write(chunk);
})
*/
/*        or           */

/*
readStream.pipe(writeStream);*/

/*add error*/
const handleError = () => {
    console.log('error');
    readStream.destroy();
    writeStream.end('Finished with error...')
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);

