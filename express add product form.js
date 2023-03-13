const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><label>Product: </label><input type="text" name="title"><label>Product Size: </label><input type="text" name="title"><button type="submit">Add Product</button>');
  });

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!<h1>');
  });

app.listen(5500);

console.log('Listening on port 5500...')

