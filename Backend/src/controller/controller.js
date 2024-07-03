const { connectToDb } = require("../db/db");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)




//get all tutor
async function getAllTutor(_req, res) {
  const query = {role : 'tutor'}
  const { userCollection } = await connectToDb();
  const result = await userCollection.find(query).toArray()
  res.send(result)
}


///booked session store


//creat a single session data and save DataBase
const uploadBookedSession = async(req,res)=>{
  const sessionData = req.body 
  const { bookedCollection } = await connectToDb();
  const result = await bookedCollection.insertOne(sessionData)
  res.send(result)
}



//get all booked session by student email
async function getBookedSessionByEmail(req, res) {
  const email = req.params.email
  const query = {studentEmail : email}
  const { bookedCollection } = await connectToDb();
 const items = await bookedCollection.find(query).toArray();
 res.send(items)
}


//review upload
const uploadReviewSession = async(req,res)=>{
  const reviewData = req.body 
  const { reviewCollection } = await connectToDb();
  const result = await reviewCollection.insertOne(reviewData)
  res.send(result)
}







/* Json Web Token */

async function LoggedInUser(req, res) {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.send(token);
  } catch (error) {
    console.error("Error creating token:", error);
    res.status(500).json({ error: "Error creating token" });
  }
}



//payment

const generateSecretKey = async (req, res) => {
  const price = req.body.price;
const priceInCent = parseFloat(price * 100)
  // Create a PaymentIntent with the order amount and currency
  if(!price || priceInCent < 1){
   return
  }
  const {client_secret} = await stripe.paymentIntents.create({
    amount: priceInCent,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
   clientSecret : client_secret
  });
};


module.exports = {
  LoggedInUser,

  uploadBookedSession,
  getBookedSessionByEmail,
  uploadReviewSession,
  generateSecretKey,
  getAllTutor,
}