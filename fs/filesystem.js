const fs = require('node:fs');
console.log('one')
console.log(fs.readFileSync('./example.txt','UTF-8'))
console.log('two')

fs.readFile('./example.txt','UTF-8',(error,data)=>{
if(error){
    console.log(error);
}else{
    console.log(data)
}
})

console.log('three');
fs.writeFileSync('./createnewfile.txt',"this is a new text for the new file change")

fs.writeFile('./createnewfile.txt','-append new hello harsha',{flag:'a'},(err,data)=>{
if(err){
    console.log(err)
}else{
    console.log('data append success')
}
})

