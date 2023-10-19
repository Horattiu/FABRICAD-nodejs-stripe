////////////////////////////////////////////////////////////////////////////////////////////////

express = require("express");
import cors from "cors";
require("dotenv").config();
import { use, serializeUser, deserializeUser, authenticate } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
const port = process.env.PORT || 4000;
import session from "express-session";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import nodemailer from "nodemailer";

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
use(
  new GoogleStrategy(
    {
      clientID:
        "8202849517t3o4io6pg5lo89.apps.googleusercontent.com",
      clientSecret: "GOCSPX-",
      callbackURL: "https://fabricadserv.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle the user's profile and access tokens here
      // You can store the user data and tokens in your server's session or database
      return done(null, profile);
    }
  )
);

serializeUser((user, done) => {
  // Serialize the user's data and store it in the session
  done(null, user);
});

deserializeUser((user, done) => {
  // Deserialize the user's data from the session
  done(null, user);
});

// Configure the Google OAuth routes
app.get(
  "/auth/google",
  authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // const user = req.session.passport.user;
    // res.json(user);
    // Successful authentication, store user in session
    req.session.user = req.user;
    res.redirect("https://fabricadserv.onrender.com/user");
  }
);

// app.get("/user", (req, res) => {
//   const user = req.session.user;

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(401).json({ message: "Unauthorized" });
//   }
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error("Error clearing session:", err);
//     }
//     res.redirect("/");
//   });
// });

const PORT = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

////////////////////////////////////////////////////////////////////////////////////////////////
