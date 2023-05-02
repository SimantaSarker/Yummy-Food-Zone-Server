const express = require("express");
const app = express();
const cors = require("cors");
const chef=require('./data/chefs.json')
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/',(req,res)=>{
res.send("Api is running")
})

app.get('/chefs',(req,res)=>{
  res.send(chef);
})


app.listen(port,()=>{
  console.log(`Dragon API is running not on ${port}`);
})





