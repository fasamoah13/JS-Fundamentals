// Array of lines
const lines = [
    "Date: 2025-11-10 22:53:37 +0000",
    "File is present"
];

// Initialize output string
let output = "";

// Loop through array to build the output
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + "\n";
}

// Print all lines at once using one console.log
console.log(output.slice(0, -1)); // remove the last \n
