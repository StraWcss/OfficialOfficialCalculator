module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
		socket.on('disconnect', () => console.log('disconnected')); 
		
        socket.on('input', data => {
            console.log(data);
            io.emit("input", data)
            socket.emit("input", data)
        })


	})

    
}