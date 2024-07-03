const { connectToDb } = require("../db/db");
const { ObjectId } = require("mongodb");



//Get All Study Session 

async function getAllSession(_req, res) {
    const { itemCollection } = await connectToDb();
    const items = await itemCollection.find().toArray();
    res.send(items)
  }
  
  async function getAllPendingSession(req, res) {
    const size = parseInt(req.query.size)
    const page = parseInt(req.query.page) - 1
    const { itemCollection } = await connectToDb();
    const query = { status: "pending" }
    const items = await itemCollection.find(query).skip(size * page).limit(size).toArray();
    res.send(items)
  }
  //get allAprove session 
  
  async function getAllApproveSession(_req, res) {
    const { itemCollection } = await connectToDb();
    const query = { status: "approved" }
    const items = await itemCollection.find(query).toArray();
    res.send(items)
    //console.log(items);
  }
  
  
  // Get a single Session data from db using _id
  const getSingleSession = async (req, res) => {
    const id = req.params.id
    const { itemCollection } = await connectToDb();
    const query = { _id: new ObjectId(id) }
    const result = await itemCollection.findOne(query)
    res.send(result)
  }
  
  //creat a single session data and save DataBase
  const createSingleSession = async(req,res)=>{
    const sessionData = req.body 
    const { itemCollection } = await connectToDb();
    const result = await itemCollection.insertOne(sessionData)
    res.send(result)
  }
  
  //update Session By status 
  
  const updateStatusOnSession = async(req, res)=>{
     const id = req.params
   //  console.log(id);
     const item = req.body
   //  console.log(item);
     const { itemCollection } = await connectToDb();
     if(!ObjectId.isValid(id)){
      return res.status(401).send({message: "Invalid Session Id"})
     }
     const updateDoc = {
      $set: { ...item}
     }
     try{
      const result = await itemCollection.updateOne( 
        {_id : new ObjectId(id)},
        updateDoc,
        { returnOriginal: false }
      )
      res.send(result)
     }catch (error) {
      res.status(500).send({ message: 'Error updating status', error }); 
    }
  }
  
  
  
  
  
  //get all session for tutor
  async function getAllSessionForTutorForPagination(req, res) {
    try {
      const size = parseInt(req.query.size);
      const page = parseInt(req.query.page) - 1;
      const email = req.params.email;
  
    //  console.log(size , page);
  
      if (isNaN(size) || isNaN(page) || !email) {
        return res.status(400).send({ error: 'Invalid query parameters' });
      }
  
      const query = {
        $and: [
          { status: { $ne: "rejected" } }, // Exclude rejected status
          { 'tutor.email': email }, // Match the tutor email
          {
            $or: [
              { status: "pending" },
              { status: "approved" }
            ]
          }
        ]
      };
  
      const { itemCollection } = await connectToDb();
      const result = await itemCollection.find(query)
        .skip(size * page)
        .limit(size)
        .toArray();
  
      res.send(result);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      res.status(500).send({ error: 'An error occurred while fetching sessions' });
    }
  }
  
  
  async function getAllSessionForTutor(req, res) {
    const email = req.params.email
    const query = {'tutor.email' : email}
    const { itemCollection } = await connectToDb();
    const result = await itemCollection.find(query).toArray()
    res.send(result)
    //console.log(result);
  }
  
  //rejected session
  
  async function getAllRejectedSessionByEmail(req, res) {
    const email = req.params.email
    const { itemCollection } = await connectToDb();
    const query = { status: "rejected", 'tutor.email' : email }
    const items = await itemCollection.find(query).toArray();
    res.send(items)
    //console.log(items);
  }

const delteSession =async(req, res)=>{
  const id = req.params.id
  //console.log(id);
  const { itemCollection } = await connectToDb();
  const query = { _id: new ObjectId(id) }
  const result = await itemCollection.deleteOne(query)
  res.send(result)
}

  module.exports ={
    getAllSession,
    getAllPendingSession,
    getSingleSession,
    getAllApproveSession,
    updateStatusOnSession,
    getAllSessionForTutor,
    getAllSessionForTutorForPagination,
    getAllRejectedSessionByEmail,
    createSingleSession,
    delteSession
  }