const router = require("express").Router();
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const STRIPE_PK = process.env.STRIPE_PUBLIC_KEY;

router.post("/", async (req, res) => {
  const cart = req.body;

  try {
    const allProducts = cart.products.map((e) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: e.title,
            images: [e.img],
          },

          unit_amount: e.price * 100,
        },
        quantity: e.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items: allProducts,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: process.env.CLIENT_URL,
    });

    res.json({ url: session.url });
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
