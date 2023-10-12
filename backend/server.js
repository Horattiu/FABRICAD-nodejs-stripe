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

// const express = require("express");
// var cors = require("cors");
// require("dotenv").config();
// // const stripe = require("stripe")(
// //   "sk_test_51NQRqrKeASpJmZ80u3e3HFZu3wvjH9kPyTIJyaXWEOJj4VdE0W2U8rKGUn3PWhUMtSWAAJGiAkhu62M2VaaXknmZ00K54CuD0x"
// // );
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.get("/success", (req, res) => {
//   res.send("Payment Successful!");
// });

// app.get("/cancel", (req, res) => {
//   res.send("Payment Cancelled!");
// });

// app.post("/checkout", async (req, res) => {
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

//     shipping_address_collection: {
//       allowed_countries: ["US", "CA", "GB", "DE", "RO"],
//     },
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// app.listen(4000, () => console.log("Listening on port 4000!"));

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();
// app.use(cors());

// app.use(express.static("public"));
// app.use(express.json());

// app.get("/success", (req, res) => {
//   res.send("Payment Successful!");
// });

// app.get("/cancel", (req, res) => {
//   res.send("Payment Cancelled!");
// });

// app.post("/checkout", async (req, res) => {
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
//     success_url: "https://fabricadserv.netlify.app/success",
//     cancel_url: "https://fabricadserv.netlify.app/cancel",
//     shipping_address_collection: {
//       allowed_countries: ["US", "CA", "GB", "DE", "RO"],
//     },
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
//////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();

// // Configure CORS to allow requests from your Netlify frontend
// const corsOptions = {
//   origin: "https://fabricadserv.netlify.app", // Replace with your Netlify frontend URL
// };

// app.use(cors(corsOptions));

// app.use(express.static("public"));
// app.use(express.json());

// app.get("/success", (req, res) => {
//   res.send("Payment Successful!");
// });

// app.get("/cancel", (req, res) => {
//   res.send("Payment Cancelled!");
// });

// app.post("/checkout", async (req, res) => {
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
//     success_url: "https://fabricadserv.onrender.com/success",
//     cancel_url: "https://fabricadserv.onrender.com/cancel",
//     shipping_address_collection: {
//       allowed_countries: ["US", "CA", "GB", "DE", "RO"],
//     },
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

////////////////////////////////////////////////////////////////////////////////////////////////

express = require("express");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const port = process.env.PORT || 4000;
const session = require("express-session");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(
  session({
    secret: "dkjash874238473h",
    resave: false,
    saveUninitialized: true,
  })
);

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

// Configure Passport with Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "820284951713-oqr7lrri9c742jv8ost3o4io6pg5lo89.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://fabricadserv.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle the user's profile and access tokens here
      // You can store the user data and tokens in your server's session or database
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // Serialize the user's data and store it in the session
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Deserialize the user's data from the session
  done(null, user);
});

// Configure the Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, store user in session
    req.session.user = req.user;
    res.redirect("https://fabricadserv.onrender.com/user");
  }
);

app.get("/user", (req, res) => {
  const user = req.session.user;

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error clearing session:", err);
    }
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

////////////////////////////////////////////////////////////////////////////////////////////////
