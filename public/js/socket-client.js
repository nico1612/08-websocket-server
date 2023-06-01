
const lblOnline=document.querySelector('#lbl-online')
const lblOffline=document.querySelector('#lbl-offline')

const socket=io();

socket.on('connect',()=>{
    console.log('Conectado')

    lblOffline.style.display='none'
    lblOnline.style.display=''
}) 

socket.on('disconnect',()=>{
    console.log('Desconectado')

    lblOnline.style.display='none'
    lblOnline.style.display=''
}) 