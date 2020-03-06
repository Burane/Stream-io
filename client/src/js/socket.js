const ipAddress = 'localhost:3105'

const io = require('socket.io-client')
const ss = require('socket.io-stream')

const socket = io.connect(ipAddress);
const stream = ss.createStream();

function startStreaming(streamVideo) {
    console.log('in function start streaming')
    console.log(streamVideo)
    ss(socket).emit('test', stream, {name: "test"});
    streamVideo.pipe(stream);
}

function stopStreaming() {

}