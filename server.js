let express = require("express");
let app = express();
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("server is running");
})
let books=[{
    title:"python",
    author:"uma devi",
    price:2000
},{
    title:"msd",
    author:"yasir",
    price:5000
}]
app.get("/",(req,res)=>{
    res.send("working")
})
app.get('/books',(req,res)=>{
    res.send({books});
})
app.get('/books/new',(req,res)=>{
    res.json('new.ejs')
})
app.post('/books',(req,res)=>{
    let {title,author,price} = req.body;
    books.push({
        title,
        author,
        price
    })
    res.redirect('/books')
})