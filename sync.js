const {readFileSync, writeFileSync} = require('fs');

console.log('start');
const readFirst = readFileSync('./content/first.txt', 'utf8');
const readSecond = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/third.txt',
 `third file : ${readFirst}, ${readSecond}\n`,
(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`done with this task result = ${result}`);
 }
 )

 console.log('starting next task');

