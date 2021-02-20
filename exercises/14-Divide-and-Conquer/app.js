let array = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

    i = 0,
    l = array.length;

while (i < l) {
    if (array[i] % 2 === 0) {
        array.push(array.splice(i, 1)[0]);
        l--;
        continue;
    }
    i++;
}

console.log(array);