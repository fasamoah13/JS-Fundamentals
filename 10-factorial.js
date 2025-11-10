// Get the first command-line argument
const input = process.argv[2];

// Recursive factorial function
function factorial(n) {
    // If n is not a number, return 1
    if (isNaN(n)) return 1;

    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) return 1;

    // Recursive case
    return n * factorial(n - 1);
}

// Convert input to integer
const number = parseInt(input, 10);

// Compute factorial
const result = factorial(number);

// Print result
console.log(result);
