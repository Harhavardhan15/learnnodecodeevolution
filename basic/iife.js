(function(param){
    const value="one"
    console.log(value+ param)

})(' - param to iife');
(function(){
    const value='two'
    console.log(value)
})();