// primary file

const http=require('http');
const url=require('url');

// create a server and configure where it listens

const server=http.createServer((req,res) =>{
  // get the url and parse it
  const parsedUrl=url.parse(req.url,true);
  // get the path and trim it to cater for  any slashes added
  const urlPath=parsedUrl.pathname;
  const trimUrl=urlPath.replace(/^\/+|\/+$/g,'');
  // get the query sttring as an object
  const queryStringObject=parsedUrl.query;
  // get the http method
  const method=req.method.toLowerCase();

  // send the response
  res.end('Hello World!\n')
  // log the path
  console.log(`path is ${trimUrl} with method ${method} `);
  console.dir(queryStringObject);
}).listen(4000)
