const path=require("path")
const createHero=require('./createHero')
const hero1=new createHero('hero1')
console.log(hero1.getName())

hero1.setName('venom')
console.log(hero1.getName())
const newhero=new createHero('spidermane')
console.log(newhero.getName())

var obj1={
    name:'harsha'
}
let obj2=obj1;
obj2={
    name:'havarhanrsha'
}
console.log(obj1)
