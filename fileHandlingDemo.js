// Import the 'fs/promises' module to work with file operations using promises
const fs = require('fs/promises');

// Asynchronous function to read the content of a file
async function readSampleFile() {
    // Read the content of 'sample.txt' file with 'utf-8' encoding
    // 'await' pauses the execution until the file is read
    const data = await fs.readFile('./sample.txt', 'utf-8');
    // Log the file content to the console
    console.log(data);
}

// Asynchronous function to write content to a file
async function writeSampleFile() {
    // Write 'hello world 2' to 'sample.txt'
    // If the file does not exist, it will be created
    // If it does exist, its content will be replaced with the new text
    await fs.writeFile('./sample.txt', 'hello world 2');
}

// Asynchronous function to append content to a file
async function appendSampleFile() {
    // Append 'hello world 3' to 'sample.txt'
    // This adds the text to the end of the file without modifying its existing content
    await fs.appendFile('./sample.txt', 'hello world 3');
}

// Call the readSampleFile function to display the file content
readSampleFile();
// Call the writeSampleFile function to write new content to the file
writeSampleFile();
// Call the appendSampleFile function to append additional content to the file
appendSampleFile();
