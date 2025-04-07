const fs= require("node:fs/promises");
fs.readFile('./createnewfile.txt','UTF-8')
.then(data=>console.log(data))
.catch(err=>console.log(err,'this is a error'))