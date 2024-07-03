const { connectToDb } = require("../db/db");

const { ObjectId } = require("mongodb");
//user create Function

const uploadUserOnDB = async(req,res)=>{
    const { userCollection } = await connectToDb();
    const user = req.body 
    console.log(user);
    const query = { email: user?.email }
    const isExist = await userCollection.findOne(query)
   console.log(isExist);
    if (isExist) {
      if(user.status === 'requested'){
        const result = await userCollection.updateOne(query, {
          $set : {status: user?.status}
        })
       return res.send(result)
      }
      else
        {return res.send("Already Exist")}
      } else {
        // save user for the first time
        const options = { upsert: true }
        const updateDoc = {
          $set: {
             ...user,
             timestamp: Date.now()
          },
        }
        const result = await userCollection.updateOne(query, updateDoc, options)
        return res.send(result)
      }
  
         
  }
  
  //update user on db
  
  
  const updateUserRole = async(req, res)=>{
     const id = req.params
    // console.log(id);
     const user = req.body
     //console.log(user);
     const { userCollection } = await connectToDb();
     if(!ObjectId.isValid(id)){
      return res.status(401).send({message: "Invalid Session Id"})
     }
  const query={_id : new ObjectId(id)}
  const updateDoc = {
   $set:  {...user,
      timestamp: Date.now()},
  }
  
     try{
      const result = await userCollection.updateOne( 
        query, updateDoc,
        { returnOriginal: false }
      )
      res.send(result)
     }catch (error) {
      res.status(500).send({ message: 'Error updating status', error }); 
    }
  }
  
  
  //get All Users From DB
  
  async function getAllUsers(req, res) {
    
    const {name} = req.query;
    console.log(req.query);

    const queryOb = {}

    const { userCollection} = await connectToDb();

    if(name){
      queryOb.name = {$regex: name , $options: "i"}
      console.log(queryOb);
      const result = await userCollection.find(queryOb).toArray()
      return res.send(result)
    }
      
  
    const result = await userCollection.find().toArray()
    res.send(result)
  }
  
  //seach function by name or email 
  
  //get a user form db by email
  
  const getUserByEmailforRole = async(req,res) =>{
  
  const email = req.params.email
  const query = {email : email}
  const { userCollection} = await connectToDb();
  const result = await userCollection.findOne(query)
  res.send(result)
  }
  

  module.exports ={
    getUserByEmailforRole,
    uploadUserOnDB,
    updateUserRole,
    getAllUsers,
  }