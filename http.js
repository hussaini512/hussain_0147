const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url ==='/'){
    res.end('welcome to home page');
    }
    else if(req.url === '/about'){
        res.end('here is our history')

    }
    else{

    res.end(`
        <h1>Oops!!</h1>
        <p>sorry we can't seems to page you are looking for</p>
        <a href="/">back home</a>
    `)
}
})
server.listen(5000);