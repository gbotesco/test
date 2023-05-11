const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to my home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    console.log(res)
    res.end(
        `<h1>Wahala</h1><br>
        <p>We no see wetin you dey fine</p>
        <a href='/'>Go back to your house</a>
        `
    )
})

server.listen(5000)