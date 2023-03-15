const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><label>Product: </label><input type="text" name="title"><label>Product Size: </label><input type="text" name="title"><button type="submit">Add Product</button>');
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;


