const EventEmitter=require('node:events')
const emitter=new EventEmitter();

emitter.on('first-emit',()=>{
    console.log('first emit is success')
})
emitter.on('second-emit',(a,b)=>{
    console.log(a,b,'second emit');
})
emitter.on('second-emit',(a)=>{
    if(a=='parm1'){
        console.log('condtion and multiple on for single emit')
    }else if(a=='large'){
        console.log('the param is large')
    }
})
emitter.emit('second-emit','parm1','param2')
emitter.emit('second-emit','large','mushroom')
emitter.emit('first-emit')