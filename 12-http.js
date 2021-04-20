const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to our homepage')
        res.end()
    
    }
    if(req.url ==='/about'){
        res.write('Here is our short history')
        res.end()
    }
    else{
        res.write(
        `<h1>Address not found</h1>
        <a href="/">Back to home</a>`
    )
    res.end()
}
})

server.listen(5000)