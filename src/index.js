const stripe = require('stripe')('your-secret-key');

app.post('/api/payment', async (req, res) => {
  const { amount, paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
