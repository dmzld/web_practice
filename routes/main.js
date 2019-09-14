var express = require("express");
var router = express.Router();
var Board = require("../models/Board");
var path = require("path");
var fs = require("fs");

const directoryPath = path.join(__dirname, '/../public/data/');

router.get("/", function(req, res){
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    res.render("main/main", {files:files}); 
  });  
});


router.get("/notes", function (req, res) {
  res.send(order);
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



module.exports = router;