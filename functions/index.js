const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HhnQ3CijXjvqrsbZ5TAlm9lBMx3xUvGGRqK1CmRegYA3zpEyeZ8nwOux7Og6FlxRF5mDI60PcbbliQKYGT4No7p00g48LQt6M"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello darkness my old friend"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved, thank you for the order >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// http://localhost:5001/vistrit-amaz0n/us-central1/api