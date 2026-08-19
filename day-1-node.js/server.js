const { log } = require("console");
let http=require("http")


let server=http.createServer((req,res)=>{
    console.log("Hello i am server");
    res.end("ok i had listen to your command.")
})

server.listen(3000,()=>{
    console.log("The server is running on port 3000..");
    
})