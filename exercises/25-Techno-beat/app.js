
function lyricsGenerator(array) {
    let lyrics = "";
    let i = 0;
    array.forEach(element => {

        if (element == 0 && i!=3) {
            lyrics += "Boom ";
        }
        else {
                i++;
            if (i == 3) {
                lyrics += "Drop the base ";
                lyrics+="!!!Break the base!!! ";
                i=0;

            }
            else {
                lyrics += "Drop the base ";
                
            };

        };
    });
    return lyrics;
};




// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))