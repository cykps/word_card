const fs = require('fs');
const readlineSync = require('readline-sync')

const quiz_data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

let data = quiz_data;
let dataLength = data.length;
let index = -1;

for (let i = data.length; i > 0; i--) {
    index = Math.floor( Math.random() * data.length );
    console.log(( dataLength - i + 1 ) + "." + data[index].ex);

    pause();

    console.log(">>" + data[index].word);
    data.splice(index, 1);
}

function pause() {
    readlineSync.prompt();
}