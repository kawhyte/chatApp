//Make connection

const client_socket = io.connect("http://localhost:4000/");

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');