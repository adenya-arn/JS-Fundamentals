const x = 'C is fun';

let timesToPrint = process.argv[2];

let i = 0;

if (Number.isNaN(timesToPrint)){
    console.log("Missing number of occurences");
}
else{
    while (i < timesToPrint){
    console.log(x);
    i++
    }
}