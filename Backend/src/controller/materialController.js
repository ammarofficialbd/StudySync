const { connectToDb } = require("../db/db");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require("mongodb");


//Create  for UploadFunction Materials For Session
const uploadMaterialForSession = async(req,res)=>{
    const { materialCollection } = await connectToDb();
    const material = req.body 
    const query = { sessionId: material?.sessionId }
    //console.log(query);
    const isExist = await materialCollection.findOne(query)
    //console.log(isExist);
    if (isExist) {
        const result = await materialCollection.updateOne(query, {
          $set: material ,
        })
        return res.send(result)
      } else {
        // save user for the first time
        const options = { upsert: true }
        const updateDoc = {
          $set: {
             ...material,
          },
        }
        const result = await materialCollection.updateOne(query, updateDoc, options)
        res.send(result)
      }
  
         
  }
  
  /* const uploadSingleMaterial = async(req,res)=>{
    const material = req.body 
    const { materialCollection } = await connectToDb();
    const result = await materialCollection.insertOne(material)
    res.send(result)
  } */
  
  
  //get all Material for tutor
  async function getAllMaterialsForTutor(req, res) {
    const email = req.params.email
    //console.log(email);
    const query = {tutorEmail : email}
    const { materialCollection } = await connectToDb();
    const result = await materialCollection.find(query).toArray()
    res.send(result)
  }
  
  
//Delete Matrial By Id 

const deleteMaterialByID = async (req, res) => {
    const id = req.params.id
   // console.log(id);
    const { materialCollection } = await connectToDb();
    const query = { _id: new ObjectId(id) }
    const result = await materialCollection.deleteOne(query)
    res.send(result)
  }
  
  const getAllMaterialFromDB = async(_req,res)=>{
    const { materialCollection } = await connectToDb();
    const result = await materialCollection.find().toArray()
    res.send(result)
  }
  
  const getMaterialById = async(req, res) =>{
    const id = req.params.id
    const query = { sessionId: id}
    const { materialCollection } = await connectToDb();
   const item = await materialCollection.find(query).toArray();
   //console.log(item);
   res.send(item)
  }
  
  module.exports = {
    uploadMaterialForSession,
    getAllMaterialsForTutor,
    deleteMaterialByID,
    getAllMaterialFromDB,
    getMaterialById,
  }