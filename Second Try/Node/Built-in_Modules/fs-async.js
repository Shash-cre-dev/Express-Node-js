// Two Ways  - Synchronus(Blocking) and Asynchronus (Non-Blocking)

// ASYNCHRONUS APPROACH

const { readFile, writeFile } = require('fs')

// To read file - a filepath, enconding and callback function 
readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)  // to check error
        return
    }
    console.log(result) // for callback function we need invoke the function inside 
})

// contents of the file are stored in result
// Without utf8 encoding it returns a buffer

// To read the contents of two files and write to another file
readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)  // to check error
        return
    }
    const first = result
    readFile('../content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)  // to check error
            return
        }
        const second = result
        writeFile(
            '../content/result-async.txt', 
            `Here is the result : ${first}, ${second}`
        , (err, result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

// Takes a less time to process than Synchronus
// We start a task, go offroad then start another task and so on 

// Although Async is faster than Sync, the code is complex with callback function
// Alternative is to use Promises or async-wait