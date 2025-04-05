// const superHero=require('./superHero.js');
// require('./badman.js');
// require('./goodman.js');
// console.log(superHero)
const createHero=require('./createHero')
console.log(createHero.getName())
createHero.setName('venom')
console.log(createHero.getName())
const newhero=require('./createHero')
console.log(newhero.getName())
