const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  }catch(err) {
    res.json({message:err});
  }
});

router.post('/', (req,res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description, 
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });

  product.save().then(data => {
        res.json(data);
         }).catch(err => {
        res.json({ message: err })
        })
})



module.exports = router;