// Array of lines to print
const lines = [
    "Date: 2025-11-10 22:53:37 +0000",
    "File is present"
];

// Build the output using a loop
let output = "";
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + (i < lines.length - 1 ? "\n" : "");
}

// Print all lines at once using one console.log
console.log(output);
