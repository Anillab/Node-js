// primary file

const http=require('http');
const url=require('url');
const {StringDecoder}=require('string_decoder');

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
// get the headers
  const headers=req.headers;
  // payloads
  const decoder=new StringDecoder('utf8');
  const buffer= '';
  decoder.write(Buffer.from(req.on))
  // req.on('data',function(data){
  //   buffer += decoder.write(data);
  // });

  console.log(decoder.end(Buffer.from(req.on)));
  // req.on('end',function(){
  //   buffer +=decoder.end();
  //   // send the response
  //   res.end('Hello World!\n')
  //   console.log(`path is ${trimUrl} with method ${method} and payloads ${buffer} `);
  //
  // });

  // log the path
  console.dir(queryStringObject);
  console.dir(headers);
}).listen(4000)
