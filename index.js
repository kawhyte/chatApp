const express = require('express');
const socket = require('socket.io');


// App setup
const app = express();

const server = app.listen(4000,()=>{
    console.log("listening on port 4000")
})

//Static Files
app.use(express.static("public"))

//socket setup
const io = socket(server);

io.on('connection', (socket)=>{
    console.log("socket.io connection",socket.id)
})