// // sk_test_51NQRqrKeASpJmZ80u3e3HFZu3wvjH9kPyTIJyaXWEOJj4VdE0W2U8rKGUn3PWhUMtSWAAJGiAkhu62M2VaaXknmZ00K54CuD0x
// // coffeE : price_1NQZAYKeASpJmZ80DtPpaXwe
// // chair : price_1NQZPCKeASpJmZ80zmUGBPRp
// // toy : price_1NQZSkKeASpJmZ80zUzbejyO

// const express = require("express");
// var cors = require("cors");


// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// // app.get("/stripe-payment-link", (req, res) => {
// //   // Redirect the user to the Stripe payment link
// //   res.redirect("https://buy.stripe.com/test_9AQaFS1Yo8tT59KaEE");
// // });

// app.get("/success", (req, res) => {
//   res.send("Payment Successful!"); // Modify this to render the success page template or redirect as needed
// });

// app.get("/cancel", (req, res) => {
//   res.send("Payment Cancelled!"); // Modify this to render the cancel page template or redirect as needed
// });

// app.post("/checkout", async (req, res) => {
//   console.log(req.body);
//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item) => {
//     lineItems.push({
//       price: item.id,
//       quantity: item.quantity,
//     });
//   });

//   const session = await stripe.checkout.sessions.create({
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:4000/success",
//     cancel_url: "http://localhost:4000/cancel",
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// app.listen(4000, () => console.log("Listening on port 4000!"));

const express = require("express");
var cors = require("cors");
require("dotenv").config();
// const stripe = require("stripe")(
//   "sk_test_51NQRqrKeASpJmZ80u3e3HFZu3wvjH9kPyTIJyaXWEOJj4VdE0W2U8rKGUn3PWhUMtSWAAJGiAkhu62M2VaaXknmZ00K54CuD0x"
// );
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
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
    success_url: "http://localhost:4000/success",
    cancel_url: "http://localhost:4000/cancel",

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

app.listen(4000, () => console.log("Listening on port 4000!"));
