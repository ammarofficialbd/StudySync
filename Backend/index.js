const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./src/routes/routes');
const cookieParser = require('cookie-parser')
dotenv.config(); 

const app = express();
app.use(cookieParser())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://studysync-5291d.web.app",
      "https://studysync-5291d.firebaseapp.com"
    ],
    credentials: true,
  })
);
app.use(express.json()); 

app.use('/api', routes, (_req,res)=>{
    res.send("Welcome to Study Sync")
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
