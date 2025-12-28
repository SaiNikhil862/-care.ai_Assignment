const express = require("express");
const db = require("../database");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/",auth,(req,res)=>{
  const { vital_type,value,recorded_at } = req.body;
  db.run("INSERT INTO vitals (user_id,vital_type,value,recorded_at) VALUES (?,?,?,?)",
    [req.user.id,vital_type,value,recorded_at],
    ()=>res.json({message:"Saved"}));
});

router.get("/",auth,(req,res)=>{
  db.all("SELECT * FROM vitals WHERE user_id=?",[req.user.id],(e,r)=>res.json(r));
});

module.exports = router;