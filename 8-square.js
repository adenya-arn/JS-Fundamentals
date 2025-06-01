const squareSize = Number(process.argv[2]);

//console.log(Number.isNaN(squareSize));


if(Number.isNaN(squareSize)){
    console.log('Missing size')
}
else{
    let i = 0;
    while(i < squareSize){
        let row = '';
        let j = 0;
        while (j < squareSize){
            row += 'X';
            j++;
        }
        console.log(row);
        i++;
    }
}