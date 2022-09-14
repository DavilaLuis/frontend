const express = require('express');
const next = require('next');

//port
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});

//handle request
const handle = app.getRequestHandler();

// ROUTES
const products = require('./routes/products')

app
  .prepare()
  .then( ()=> {
    // ALL THE SERVER CODE IS HERE
    const server = express();

    // USE ROUTES
    server.use('/products', products);

    server.get('/api/route', (req, res) => {
      return res.send('DONE!');
    });
    
    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.listen(PORT, err => {
      if(err) throw err;
      console.log('Server started on port ', PORT);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });

