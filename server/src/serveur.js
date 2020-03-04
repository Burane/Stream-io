const config = require("../config.json");
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



http.listen(config.port, () => {
    console.log(`listennig on ${config.port}`)
});

io.on('connection', (socket) => {
    console.log('utilisateur connecter')
    socket.emit('conn',{        
    } )

    socket.on('disconnect', () => {
        console.log('utilisateur deconnecter')
    })

});