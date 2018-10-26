const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/sel",(req,res)=>{
  var op=req.query.op
  var num=parseInt(req.query.num)
  var sql="SELECT * FROM book ORDER BY "+op+" desc limit 0,"+num;
  pool.query(sql,[],(err,result)=>{
      if(err) console.log(err)
      console.log(sql,op,num)
      res.send(result)
  })
})


module.exports=router;
