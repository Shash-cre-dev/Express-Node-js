const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')

//event - data
stream.on('data', (result) =>{
    console.log(result)
})

// we read data in chunks of 64kb (default)
// chunks will either be in string or buffer
// we can also change the size of the chunks with highWaterMark property

// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000}) //90Kb

//  We can set up the encoding also
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

// error event
stream.on('error', (err)=> console.log(err))
