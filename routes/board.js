var express = require("express");
var router = express.Router(); // router함수 초기화
var Board = require("../models/Board");

/*
router.HTTP_METHOD("주소1") : 주소1은 router를 거쳐왔기 때문에 상위폴더 생략
  res.render("주소2") : 주소2는 새로 render하는 것이기 때문에 완벽한 주소
*/

router.get("/", (req, res)=>{
  Board.find({}, (err, boards)=>{ // 모델.find{검색조건, 콜백함수}
        if(err) return res.json(err);   
        res.render("board/board", {boards:boards});
    });
});

router.get("/new",(req, res)=>{
  res.render("board/new");
});

router.post("/",(req, res)=>{
  Board.create(req.body, (err, board)=>{
      if(err) return res.json(err);
      res.redirect("board/");
  });
});

router.get("/:id",(req, res)=>{
  Board.findOne({_id:req.params.id}, (err, board)=>{
      if(err) return res.json(err);
      res.render("board/show", {board:board});
  });
});

router.get("/:id/edit",(req, res)=>{
  Board.findOne({_id:req.params.id}, (err, board)=>{
      if(err) return res.json(err);
      res.render("board/edit", {board:board});
  });
});

router.put("/:id",(req, res)=>{
  Board.findOneAndUpdate({_id:req.params.id}, req.body, (err, board)=>{
      if(err) return res.json(err);
      res.redirect("/board/"+req.params.id);
  });
});

router.delete("/:id",(req, res)=>{
  Board.deleteOne({_id:req.params.id}, (err, board)=>{
      if(err) return res.json(err);
      res.redirect("/board");
  });
});

module.exports = router;