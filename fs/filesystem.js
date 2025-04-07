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
console.log('three')


