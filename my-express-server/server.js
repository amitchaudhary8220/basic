const express =require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("hello world");

});
app.get('/about',(req,res)=>{
    res.send("Hello my name is Amit Chaudhary ,i'm a full stack web developer");
})
app.get('/services',(req,res)=>{
res.send("we offer paid course which are designed according to your ease");
});
app.listen("3000",()=>{
    console.log("server is started");
})