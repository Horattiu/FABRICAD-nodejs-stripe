////////////////////////////////////////////////////////////////////////////////////////////////

express = require("express");
const cors = require("cors");
require("dotenv").config();
// const passport = require("passport");
const port = process.env.PORT || 4000;
const session = require("express-session");
const stripe = require("stripe")(
  "sk_test_51NQRqrKeASpJmZ80u3e3HFZu3wvjH9kPyTIJyaXWEOJj4VdE0W2U8rKGUn3PWhUMtSWAAJGiAkhu62M2VaaXknmZ00K54CuD0x"
);

const app = express();

const corsOptions = {
  origin: "https://fabricadserv.netlify.app",
};

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());

app.get("/success", (req, res) => {
  res.send("Payment Successful!");
});

app.get("/cancel", (req, res) => {
  res.send("Payment Cancelled!");
});

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://fabricadserv.onrender.com/success",
    cancel_url: "https://fabricadserv.onrender.com/cancel",
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "DE", "RO"],
    },
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

const PORT = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

////////////////////////////////////////////////////////////////////////////////////////////////
