var express = require("express");
var app = express();

var gallery = require("./data/gallery");
var rooms = require("./data/rooms");

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.set("views", "./views");
app.set("view engine", "jade");

app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

app.get('/rooms', function(req, res) {
  res.render('rooms', {
    title: "Chatrooms",
    rooms: rooms });
});

app.get('/users', function(req, res) {
  res.render('users', { title: "Users" });
});

app.get('/gallery', function(req, res) {
  res.render('gallery', {
    title: "Gallery",
    gallery: gallery
  });
});

app.get('/gallery/add', function(req, res) {
  res.render('add');
});

app.get('/', function(req, res) {
  res.render('index', { title: "Chatapp" });
});

app.listen(11000, function() {
  console.log('listenaaaang');
});
