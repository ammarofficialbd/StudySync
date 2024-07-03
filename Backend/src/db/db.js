
const { MongoClient, ServerApiVersion } = require('mongodb');

const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDb() {
  try {
   
   // await client.connect();
  
   // await client.db("admin").command({ ping: 1 });
   // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db('studysync');
    const itemCollection = db.collection('sessions');
     const userCollection = db.collection('users');
    const materialCollection = db.collection('materials'); 
    const noteCollection = db.collection('notes'); 
    const bookedCollection= db.collection('booked-sessions'); 
    const reviewCollection= db.collection('reviews'); 



  


    return {
      itemCollection,
      materialCollection,
      userCollection,
      noteCollection,
      bookedCollection,
      reviewCollection
    } 
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


module.exports = { connectToDb, client };
