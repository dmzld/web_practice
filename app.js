var express=require("express"),
app=express(),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
methodOverride=require("method-override")
;

/* DB setting */
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_DB); // 환경변수

var db = mongoose.connection;

db.once("open", ()=>{
    console.log("DB connected");
})
db.on("error",()=>{
    console.log("DB ERROR : ", err);
})

/* other setting */
app.set("view engine","ejs"); // express의 view engine에 ejs를 set
app.use(express.static(__dirname + '/public')); //__dirname : nodejs에서 사용하는 '프로그램이 실행중인 위치'를 담은 global variable

app.use(bodyParser.json()); // json data 분석
app.use(bodyParser.urlencoded({extended:true})); // urlEncoded data 분석
// 결과적으로 req.body 생성

app.use(methodOverride("_method"));


/* route */
app.use("/", require("./routes/about"));
app.use("/main", require("./routes/main"));
app.use("/board", require("./routes/board"));


//app.use("/sample", require("./routes/sample"));


app.listen(3000, function(){
    console.log("server on");
});