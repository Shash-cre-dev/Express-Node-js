// Two Ways  - Synchronus(Blocking) and Asynchronus (Non-Blocking)

// SYNCHRONUS APPROACH

const { readFileSync, writeFileSync } = require('fs')

// To read from a file use readFileSync
// It needs two arguments a file path and encoding (default utf8)

const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8')
console.log(first, second)

// To write to a file use writeFileSync
// It needs two arguments a filename( if doesn't exist Node will create one 
//, when it exists it will overwrite the default values written in it) and value

writeFileSync(
    '../content/result-sync.txt',
    `Here is the result : ${first}, ${second}`
)

// To Append to the  End of the File add {flag: 'a'} - flag object to a
writeFileSync(
    '../content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)


// Takes a lot of time to process- line by line approach
// only when we are done with a task we start with the next one