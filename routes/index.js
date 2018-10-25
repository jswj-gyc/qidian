const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/sel",(req,res)=>{
  var op=req.query.op
  var num=req.query.num
  var sql="SELECT * FROM book ORDER BY ? DESC LIMIT ?";
  pool.query(sql,[op,num],(err,result)=>{
      if(err) console.log(err)
      console.log(sql,op,num)
      //res.send(result)
      res.writeHead(200,{
          "Content-Type":"application/json;charset=utf-8",
          "Access-Control-Allow-Origin":"*"
      })
      res.end()
  })
})


module.exports=router;