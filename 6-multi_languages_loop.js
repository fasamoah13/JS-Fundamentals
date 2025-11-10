// Array of strings
const lines = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// Build the output using a loop
let output = '';
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + (i < lines.length - 1 ? '\n' : '');
}

// Print all lines with a single console.log
console.log(output);
