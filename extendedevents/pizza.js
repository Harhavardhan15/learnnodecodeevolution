const EventEmitter=require('node:events')
class Pizza extends EventEmitter{
    constructor(){
        super();
        this.ordernumber=0;
    }
    order(size,topping){
        this.ordernumber++;
        this.emit('order',size,topping)
    }

    displayOrdernumber(){
        console.log('Order number is '+ this.ordernumber)
    }
}
module.exports=Pizza