// primary file

const http=require('http');
const url=require('url');

// create a server and configure where it listens

const server=http.createServer((req,res) =>{
  // get the url and parse it
  const parsedUrl=url.parse(req.url,true,true);
  // get the path and trim it to cater for  any slashes added
  const urlPath=parsedUrl.pathname;
  const trimUrl=urlPath.replace(/^\/+|\/+$/g,'');
  // send the response
  res.end('Hello World!\n')
  // log the path
  console.log(`path is ${trimUrl}`);
}).listen(4000)
