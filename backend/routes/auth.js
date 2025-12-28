const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  db.run("INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name,email,hashed],
    err => err ? res.status(400).json({message:"User exists"}) : res.json({message:"Registered"})
  );
});

router.post("/login", (req,res)=>{
  const { email,password } = req.body;
  db.get("SELECT * FROM users WHERE email=?",[email],(err,user)=>{
    if(!user || !bcrypt.compareSync(password,user.password))
      return res.status(401).json({message:"Invalid"});
    const token = jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.json({token});
  });
});

module.exports = router;