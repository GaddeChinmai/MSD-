let express = require("express");
let app = express();
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("server is running");
})
let books=[{
    title:"DMT",
    author:"Bharghavi",
    price:5000
},{
    title:"MSD",
    author:"Yasir",
    price:10000
},
{
    title:"CN",
    author:"Vinoj",
    price:7000
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