const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.send('Here you will find all the products');
});

module.exports = router;