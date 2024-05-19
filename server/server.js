const stripe = require('stripe')('sk_test_51NcaxcSDqNLUWVOVnrswbi4REINg61Zu1JxJVZB4XFfnRVjVl3JxJvL9wf1r17JpzFwNqshQLLXpwtLkU5fMmzBZ00EJ0XjC7a');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.send("Hello Folks..!!! Please subscribe my channel")
})

app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.

    const {amount, currency} = req.body    

    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2023-08-16'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      payment_method_types: [ 'card'],
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  });


app.listen(4003, ()=> console.log("Running on http://localhost:4003"))