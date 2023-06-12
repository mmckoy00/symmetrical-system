 const http = require('http');

 const server = http.createServer((request, response)=>{
    if(request.url ==='/'){
        response.end('Welcome to my home page');
    }else if(request.url === '/about'){
        response.end("This is the about page");
    }else if(request.url === '/blog'){
        response.end('This is the blog page');
    }else {response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for 
    <a href ="/">Go back home</a></p>
    `)
}
 })
 server.listen(1234)


 const _=require('lodash')