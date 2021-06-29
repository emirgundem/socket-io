const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);




app.get('/socket-io',(request,response)=>{
    response.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket)=>{
    socket.on('chat message',(message)=>{
       io.emit('chat message', message);
    })
})




server.listen(3000,()=>{
    console.log('server listenin on port : 3000')
})