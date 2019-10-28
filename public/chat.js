const items =[];

//Make connection to auction 

const socket = io.connect("http://localhost:4000/");

// Query DOM
const message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById('feedback');

//Emit Event
btn.addEventListener("click", (e) => {

  console.log(e);
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
  
  message.value ="";
});

message.addEventListener('keypress', ()=> {
  socket.emit('typing', handle.value);
})

//Listen for events
socket.on('chat', (data)=>{
  feedback.innerHTML = '';
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';

      items.push(data);
  console.log('These are the items:'+ items)
  localStorage.setItem('messages',JSON.stringify(items))
})

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});