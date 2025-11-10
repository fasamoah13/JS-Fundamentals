// Define the messages using 'const'
const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// Initialize the output string using 'let'
let output = '';

// Loop through the array to build the single output string,
// appending a newline character (\n) after each message.
for (const message of messages) {
    output += message + '\n';
}

// Print the entire string in a single console.log call.
console.log(output);
