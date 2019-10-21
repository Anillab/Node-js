// primary file

const http=require('http');
const url=require('url');

// create a server and configure where it listens

const server=http.createServer((req,res) =>{
  res.end('Hello World!\n')
}).listen(4000)
