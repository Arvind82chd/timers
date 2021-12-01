const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Press a key for sound `, (answer) => {
    if (answer === 'b') {
        process.stdout.write('\x07');
    } else if (answer === '1' || answer === '2' || answer === '3' || answer === '4' || answer === '5' || answer === '6' || answer === '7' || answer === '8' || answer === '9') {
        setTimeout(() => 
            process.stdout.write('\x07'), 1000 * answer);
    } else if (answer === '\u0003') {
        rl.close();
    }
    
  
});

