import express from "express";
const router = express.Router();
router.post("/signup",(req,res)=>{
    res.send("SIGNUP");
});

// router.post("/loginin",(req,res)=>{
//     const{email, password}=req.body,

// })
export default router;