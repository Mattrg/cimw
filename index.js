var express = require('express')
//var app = express()
const app = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
var http = require('http').createServer(app);
//var io = require('socket.io')(http);
const router = express.Router();
//const path = __dirname + '/'

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');



const io = socketIO(app);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

//app.get('/', function(request, response) {
  //response.send('Hello World!')
//})

app.get("/chat", function(req,res){
  res.sendFile(path + "chat.html");
})

//app.get("/index", function(req,res){
  //res.sendFile(path + "index.html");
//})




//app.listen(app.get('port'), function() {
  //console.log("Node app is running at localhost:" + app.get('port'))
//})
