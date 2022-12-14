const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const balanceRoute = require('./routes/balance');
const transferRoute = require('./routes/transfer');
// const orderRoute = require('./routes/order');
// const stripeRoute = require('./routes/stripe');
// const bankRoute = require('./routes/bank');
// const transactRoute = require('./routes/transact');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connection Successfull!'))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/balance', balanceRoute);
app.use('/api/transfer', transferRoute);
// app.use('/api/carts', cartRoute);
// app.use('/api/orders', orderRoute);
// app.use('/api/checkout', stripeRoute);
// app.use('/api/bankinfo', bankRoute);
// app.use('/api/transact', transactRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!');
});
