var mongoose = require("mongoose");

var boardSchema = mongoose.Schema({
    title:{type:String, required:true},
    date:{type:String, required:true},
    writer_id:{type:String, require:true},
    contents:{type:String, required:true}
});
var Board = mongoose.model("board",boardSchema);

module.exports=Board;