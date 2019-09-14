var express = require("express");
var router = express.Router();
var Board = require("../models/Board");

router.get("/", function(req, res){
  Board.find({}, (err, boards)=>{ // 모델.find{검색조건, 콜백함수}
        if(err) return res.json(err);   
        res.render("main/main", {boards:boards});
    });
});

router.get("/new",(req, res)=>{ 
  res.render("home/new");
});

router.post("/",(req, res)=>{
  Board.create(req.body, (err, board)=>{
      if(err) return res.json(err);
      res.redirect("/");
  });
});

router.get("/:id",(req, res)=>{
  Board.findOne({_id:req.params.id}, (err, board)=>{
      if(err) return res.json(err);
      res.render("home/show", {board:board});
  });
});

$.ajax({
  
})

module.exports = router;