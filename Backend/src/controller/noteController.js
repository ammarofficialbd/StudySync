const { connectToDb } = require("../db/db");

const { ObjectId } = require("mongodb");


//upload Note on DB
const uploadNote = async(req,res)=>{
    const noteData = req.body 
    const { noteCollection } = await connectToDb();
    const result = await noteCollection.insertOne(noteData)
    res.send(result)
  }
  
  //get all notes by student email
  async function getNotesByEmail(req, res) {
     const email = req.params.email
     const query = {studentEmail : email}
     const { noteCollection } = await connectToDb();
    const items = await noteCollection.find(query).toArray();
    res.send(items)
  }
  
  
  //update Note
  
  const updateNotesByID = async(req, res)=>{
    const id = req.params
    // console.log(id);
    const note = req.body
    // console.log(note);
     const { noteCollection } = await connectToDb();
     if(!ObjectId.isValid(id)){
      return res.status(401).send({message: "Invalid Session Id"})
     }
     const updateDoc = {
      $set: { ...note}
     }
     try{
      const result = await noteCollection.updateOne( 
        {_id : new ObjectId(id)},
        updateDoc,
        { returnOriginal: false }
      )
      res.status(201).send({meassge: "Data Update Successfully"})
     }catch (error) {
      res.status(500).send({ message: 'Error updating status', error }); 
    }
  }
  
  //deltet notes
  const deleteNoteByID = async (req, res) => {
    const id = req.params.id
    //console.log(id);
    const { noteCollection } = await connectToDb();
    const query = { _id: new ObjectId(id) }
    const result = await noteCollection.deleteOne(query)
    res.send(result)
  }
  
  module.exports = {
    uploadNote,
    getNotesByEmail,
    updateNotesByID,
    deleteNoteByID,
  }