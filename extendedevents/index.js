const pizza=require('./pizza.js');
const drink=require('./drink.js');
const pizzashop=new pizza();
const getDrink=new drink()
pizzashop.on('order',(size,type)=>{
    console.log("ordering one "+size+" "+type)
    getDrink.serveDrinks(size);
})
pizzashop.order('large','mushroom');
pizzashop.displayOrdernumber();