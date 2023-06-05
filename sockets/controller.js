
export const socketController = (socket) =>{
 
    console.log('conectado', socket.id)

    socket.on('disconnect', ()=>{
        console.log('desconectado', socket.id)
    })

    socket.on('enviar-mensaje',(payload, callback)=>{

        const id=123456789
        
        callback(id)
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}