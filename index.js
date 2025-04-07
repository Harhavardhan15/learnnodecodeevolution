const path=require("path")
// const createHero=require('./createHero')
// const hero1=new createHero('hero1')
// console.log(hero1.getName())

// hero1.setName('venom')
// console.log(hero1.getName())
// const newhero=new createHero('spidermane')
// console.log(newhero.getName())

// var obj1={
//     name:'harsha'
// }
// let obj2=obj1;
// obj2={
//     name:'havarhanrsha'
// }
// console.log(obj1)
console.log(__filename)
console.log(__dirname)
console.log(path.basename(__filename));
console.log(path.basename(__dirname))
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))
console.log(path.isAbsolute(__filename));

console.log(path.join('folder1','folder2'))
console.log(path.join(__dirname,'iife.js'))

console.log(path.resolve('folder','goodman.js'))

