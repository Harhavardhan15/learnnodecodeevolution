const fs=require('node:fs');
const zlib=require('node:zlib')

const readablestream=fs.createReadStream('./file.txt',{
    encoding:'utf-8',
})
const gzip=zlib.createGzip()
const writablestream=fs.createWriteStream('./file2.txt')
readablestream.pipe(writablestream);
readablestream.pipe(gzip).pipe(fs.WriteStream('file2.txt.gx'))