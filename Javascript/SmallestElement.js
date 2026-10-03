const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function(input) {

    const numbers = input.trim().split(/\s+/).map(Number);

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    console.log("Array:", numbers);
    console.log("Smallest element:", smallest);

    rl.close();
});
