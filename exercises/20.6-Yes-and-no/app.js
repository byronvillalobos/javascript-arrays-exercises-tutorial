let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let newArray = function pregunta(value) {

    if(value===0)
    newArray="woko";
    else{
        newArray="wiki";
    }
    return newArray;
}

console.log(theBools.map(newArray));