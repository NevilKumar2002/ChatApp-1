const express= require('express');
const app= express();
const http= require('http');
const server= http.createServer(app);

const {Server}= require("socket.io");
const io=new Server(server);
io.on('secret message',(socket)=>{
    socket.on('secret message',(data)=>{
        console.log(data);
        io.emit("data",data);
    })
    console.log(socket.id);
})

let PORT= 7777;
console.log("Hello")
app.use(express.static('public'));
app.listen(PORT);
