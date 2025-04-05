// const superHero=require('./superHero.js');
// require('./badman.js');
// require('./goodman.js');
// console.log(superHero)
const createHero=require('./createHero')
const hero1=new createHero('hero1')
console.log(hero1.getName())

hero1.setName('venom')
console.log(hero1.getName())
const newhero=new createHero('spidermane')
console.log(newhero.getName())
