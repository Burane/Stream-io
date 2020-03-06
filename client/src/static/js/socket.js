const ipAddress = 'localhost:3105'

const io = require('socket.io-client')
const stream = require('socket.io-stream')


const socket = io.connect(ipAddress);
const stream = ss.createStream();

function startStreaming(mediarecorder) {
    console.log('in function start streaming')
    let streamVideo = mediarecorder.stream
    stream(socket).emit('test', stream, {name: "test"});
    streamVideo.pipe(stream);
}

function stopStreaming() {

}