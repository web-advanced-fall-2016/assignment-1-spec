let fs = require('fs');

const fnPath = './us.txt';
const snPath = './us-sn.txt';
let fnames, snames, combinations = new Set();

let result = fs.readFileSync(fnPath);

if (result) {
    fnames = result.toString().split('\r\n');
}

result = fs.readFileSync(snPath);
if (result) {
    snames = result.toString().split('\n');
}

for (let i = 0; i < 50000; i++) {
    let fnRandomIndex = Math.round(Math.random() * (fnames.length - 1));
    let snRandomIndex = Math.round(Math.random() * (snames.length - 1));
    combinations.add(fnames[fnRandomIndex] + ' ' + snames[snRandomIndex]);
}

let arr = Array.from(combinations).map((name) => (name +':'+ Math.round(Math.random() * 1000000)));

fs.writeFile("./names.txt", arr.join(';'), function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});