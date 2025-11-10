// Get the first command-line argument
const input = process.argv[2];

// Convert input to integer
const count = parseInt(input, 10);

// Check if count is a valid number
if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    // Loop to print "C is fun" count times
    let i = 0;
    while (i < count) {
        console.log("C is fun");
        i++;
    }
}
