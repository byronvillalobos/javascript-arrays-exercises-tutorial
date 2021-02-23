// Code goes here

function matrixBuilder(number){

    let newArray=[];

    for (j=0;j<number;j++){
        newArray[j]=[];
    for (i=0;i<number;i++){

        newArray[j][i]=Math.floor(Math.random() *2); 
    }
}
return newArray;
}



// do not change anything from this line down
console.log(matrixBuilder(5));