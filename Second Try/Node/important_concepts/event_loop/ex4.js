const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === 'about'){
        // BLOCKING CODE!!!
        for (let i = 0; i <1000; i++) {
            for( let j=0; j<1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page')
    }
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})

// Output
// The BLOCKING CODE BLOCKS ALL THE PAGES for multiple users- Home, About and Error Page

// Always
// Therefore always set up your code Asynchronously (Non Blocking)