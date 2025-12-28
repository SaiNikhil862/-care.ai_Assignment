const jwt = require("jsonwebtoken");
module.exports = (req,res,next)=>{
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.sendStatus(401);
  jwt.verify(token,process.env.JWT_SECRET,(e,u)=>{
    if(e) return res.sendStatus(403);
    req.user=u; next();
  });
};