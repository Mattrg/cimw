var express = require('express')
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
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




const io = socketIO(app);

io.on('connection', (socket) => {
  console.log('Client connected');
  const notes = {
    'C6': 96,
    'B5': 95,
    'Bb5': 94,
    'A5': 93,
    'Ab5': 92,
    'G5': 91,
    'Gb5': 90,
    'F5': 89,
    'E5': 88,
    'Eb5': 87,
    'D5': 86,
    'Db5': 85,
    'C5': 84,
    'B4': 83,
    'Bb4': 82,
    'A4': 81,
    'Ab4': 80,
    'G4': 79,
    'Gb4': 78,
    'F4': 77,
    'E4': 76,
    'Eb4': 75,
    'D4': 74,
    'Db4': 73,
    'C4': 72,
    'B3': 71,
    'Bb3': 70,
    'A3': 69,
    'Ab3': 68,
    'G3': 67,
    'Gb3': 66,
    'F3': 65,
    'E3': 64,
    'Eb3': 63,
    'D3': 62,
    'Db3': 61,
    'C3': 60,
    'B2': 59,
    'Bb2': 58,
    'A2': 57,
    'Ab2': 56,
    'G2': 55,
    'Gb2': 54,
    'F2': 53,
    'E2': 52,
    'Eb2': 51,
    'D2': 50,
    'Db2': 49,
    'C2': 48,
  }

socket.on('press-key', key => {
  let note = notes[key]
  let keyToPress = piano.keys.find(key => key.note === note)
  piano.toggleKey(keyToPress.note)
})
  socket.on('disconnect', () => console.log('Client disconnected'));
});

//app.get('/', function(request, response) {
  //response.send('Hello World!')
//})

//app.get("/chat", function(req,res){
  //res.sendFile(path + "chat.html");
//})

//app.get("/index", function(req,res){
  //res.sendFile(path + "index.html");
//})




//app.listen(app.get('port'), function() {
  //console.log("Node app is running at localhost:" + app.get('port'))
//})
