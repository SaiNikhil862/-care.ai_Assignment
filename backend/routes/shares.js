const express = require("express");
const db = require("../database");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/",auth,(req,res)=>{
  const { report_id,shared_with_email } = req.body;
  db.run("INSERT INTO shares (report_id,shared_with_email,role) VALUES (?,?,?)",
    [report_id,shared_with_email,"VIEWER"],
    ()=>res.json({message:"Shared"}));
});

router.get("/me",auth,(req,res)=>{
  db.all(`SELECT r.* FROM reports r JOIN shares s ON r.id=s.report_id WHERE s.shared_with_email=?`,
    [req.user.email],(e,r)=>res.json(r));
});

module.exports = router;