const ipAddress = 'http://burane.fr:3100/'
const socket = io(ipAddress)

document.getElementById('sendMsg').onclick = sendMsg

socket.on('message', (msg) => createMsg('left', msg.pseudo, msg.content))

function sendMsg() {

    let msg = document.getElementById('input-box').value
    console.log(msg)

    socket.emit('message', {
        pseudo: 'Me',
        content: msg
    })

    createMsg('right', 'Me', msg)
}