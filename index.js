const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;


app.get('/',(req,res)=>{
res.send("Api is running")
})



