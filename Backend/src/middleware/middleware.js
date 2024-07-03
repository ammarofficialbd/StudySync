const jwt = require('jsonwebtoken')
 const { connectToDb } = require("../db/db");

 const verifyToken = (req, res, next) => {
  // Step 1: Extract the token from the Authorization header
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({ message: 'Unauthorized Access' });
  }

  // Step 2: Extract the token from the Bearer string
  const token = authHeader.split(' ')[1];

  // Step 3: Verify the token
  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized Access' });
    }
    req.user = decode;
    next();
  });
};
  
 


  const verifyAdmin = async( req, res, next)=>{
    const user = req.user
    const query = {email: user?.email}
    const { userCollection } = await connectToDb();
    const result = await userCollection.findOne(query)
    if(!result || result.role !== "admin"){
      return res.status(401).send({message : "Unauthorized Access"})
    }

    next()
  }
  
  const verifyStudent= async( req, res, next)=>{
    const user = req.user
    const query = {email: user?.email}
    const { userCollection } = await connectToDb();
    const result = await userCollection.findOne(query)
    if(!result || result.role !== "student"){
      return res.status(401).send({message : "Unauthorized Access"})
    }

    next()
  }
  
  const verifyTutor = async( req, res, next)=>{
    const user = req.user
    const query = {email: user?.email}
    const { userCollection } = await connectToDb();
    const result = await userCollection.findOne(query)
    if(!result || result.role !== "tutor"){
      return res.status(401).send({message : "Unauthorized Access"})
    }

    next()
  }

  module.exports = {
    verifyToken,
    verifyAdmin,
    verifyStudent,
    verifyTutor
  };