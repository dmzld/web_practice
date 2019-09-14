var express = require("express");
var router = express.Router();
var Contact = require("../models/Contact");

router.get("/",(req, res)=>{ 
    Contact.find({}, (err, contacts)=>{ // 모델.find{검색조건, 콜백함수}
        if(err) return res.json(err);   
        res.render("contacts/index", {contacts:contacts});
    });
});

router.get("/new",(req, res)=>{ 
    res.render("contacts/new");
});

router.post("/",(req, res)=>{
    Contact.create(req.body, (err, contact)=>{
        if(err) return res.json(err);
        res.redirect("/contacts");
    });
});
/* show */
router.get("/:id",(req, res)=>{
    Contact.findOne({_id:req.params.id}, (err, contact)=>{
        if(err) return res.json(err);
        res.render("contacts/show", {contact:contact});
    });
});
/* edit */
router.get("/:id/edit",(req, res)=>{
    Contact.findOne({_id:req.params.id}, (err, contact)=>{
        if(err) return res.json(err);
        res.render("contacts/edit", {contact:contact});
    });
});
/* update */
router.put("/:id",(req, res)=>{
    Contact.findOneAndUpdate({_id:req.params.id}, req.body, (err, contact)=>{
        if(err) return res.json(err);
        res.redirect("/contacts/"+req.params.id);
    });
});
/* destroy */
router.delete("/:id",(req, res)=>{
    Contact.deleteOne({_id:req.params.id}, (err, contact)=>{
        if(err) return res.json(err);
        res.redirect("/contacts");
    });
});

module.exports=router;