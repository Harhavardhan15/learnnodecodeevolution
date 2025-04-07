const callback=(name)=>{
    console.log(`hi ${name}`)
}
const higherorderfunction=(callback)=>{
    const name="harsha";
    callback(name)
}
higherorderfunction(callback)