// Get the first argument
const arg = process.argv[2];

// Convert argument to integer
const count = parseInt(arg, 10);

// Check if it's a valid number
if (Number.isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    // Build the output using a loop
    let output = "";
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    // Print all lines at once
    console.log(output.slice(0, -1)); // remove the last newline
}
