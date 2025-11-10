// Array of lines
const lines = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// Initialize an empty string
let output = "";

// Loop through the array
for (let i = 0; i < lines.length; i++) {
    output += lines[i];
    // Add newline except after the last line
    if (i < lines.length - 1) output += "\n";
}

// Print all lines with one console.log
console.log(output);
