import config from '../config';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect(config.BD.PATH);

const db = mongoose.connection;
const api = express();
const server = http.Server(api);
const io = socketIo(server);

db.on('error', console.error.bind(console, 'connection error:'));

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());

api.get('/', (req, res) => {
	res.status(200).send('<!DOCTYPE html><html><head></head><body>Hello World<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.8/socket.io.min.js"></script><script>var socket = io(\'http://localhost:3000\');socket.on(\'news\', function (data) {console.log(data);socket.emit(\'my other event\', { my: \'data\' });});</script></body></html>');
});

server.listen(config.APP_PORT, function() {
  console.log('Server listening to port ' + config.APP_PORT);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'worldddd' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

export default api;