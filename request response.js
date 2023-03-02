const http = require('http');
http.createServer((req, res)  => {
  if (req.url === '/'){
  res.write('Welcome to my Node Js project');
  res.end();
  }
  
  if (req.url === '/home'){
    res.write('Welcome home');
    res.end();
  }

  if (req.url === '/about'){
    res.write('Welcome to About Us page');
    res.end();
  }

  if (req.url === '/node'){
    res.write('Welcome to my Node Js project');
    res.end();
  }
}).listen(5000);

console.log('Listening on port 5000...')

