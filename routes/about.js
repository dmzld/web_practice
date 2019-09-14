var express = require("express");
var router = express.Router();
var Board = require("../models/Board");

router.get("/", function(req, res){
  Board.find({}, (err, boards)=>{ // 모델.find{검색조건, 콜백함수}
        if(err) return res.json(err);   
        res.render("about/about", {boards:boards});
    });
});

module.exports = router;
