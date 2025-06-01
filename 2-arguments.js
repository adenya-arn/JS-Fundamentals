let args = process.argv;

let length = args.length;

if (length === 2){
    console.log('No argument')
}
else if(length == 3){
    console.log('Argument found')
}
else{
    console.log('Arguments found')
}
