const input = prompt("Enter numbers separated by spaces:");

const numbers = input
    .split(" ")
    .map(Number);

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Smallest element:", smallest);