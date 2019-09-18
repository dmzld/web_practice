var express = require("express");
var router = express.Router();
var Board = require("../models/Board");
var path = require("path");
var fs = require("fs");

const directoryPath = path.join(__dirname, '/../views/main/notes/');


router.get("/", function(req, res){
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    res.render("main/main", {files:files}); 
  });  
});

router.get("/notes/:id",(req, res)=>{
  var note = req.params.id.split('.')[0]
  res.render("main/notes/"+note);
});

router.get("/:id",(req, res)=>{
  Board.findOne({_id:req.params.id}, (err, board)=>{
      if(err) return res.json(err);
      res.render("home/show", {board:board});
  });
});



module.exports = router;