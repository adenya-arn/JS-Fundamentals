let args = process.argv;
 
let converted = Number(args[2])
//console.log(Number.isNaN(converted))
if (!Number.isNaN(converted)){
    console.log(`My number: ${converted}`);
}
else{
    console.log('Not a number')
}
