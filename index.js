const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('pubilc'));
// all rount handlers to have middleware function be applied.
app.use(bodyParser.urlencoded({ extened: true }));
app.use(
  cookieSession({
    keys: ['sqdkx12933ifbjlw213bhj56h3gc23ff18'],
  })
);
// Make sub router form auth
// Make sure it after middleware.
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

/* 3000 = port number */
/* Router is responsible in taking in comming requsets 
looking at the path and medthod then calling the appropriate callback function */
app.listen(3000, () => {
  console.log('listening');
});
