// Get the first command-line argument
const input = process.argv[2];

// Convert input to integer
const size = parseInt(input, 10);

// Check if size is a valid number
if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Loop to print each row of the square
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
