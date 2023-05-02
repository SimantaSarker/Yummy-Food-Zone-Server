const express = require("express");
const app = express();
const cors = require("cors");
const chefs=require('./data/chefs.json')
const specialData=require('./data/sepcial.json')
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/',(req,res)=>{
res.send("Api is running")
})

app.get('/chefs',(req,res)=>{
  res.send(chefs);
})

 app.get('/chefs/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const selectedChef=chefs.find(chef=>parseInt(chef.chefId)===id)
  res.send(selectedChef)
 })


 app.get('/special',(req,res)=>{
  res.send(specialData)
 })
 

app.listen(port,()=>{
  console.log(`Dragon API is running not on ${port}`);
})





