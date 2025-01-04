var clients = []

export function addClient(socket){
    clients.push(socket)
}

export function sendData(data){
    clients.forEach(socket => {
       sendDataToSocket(socket, data) 
    });
}

export function sendDataToSocket(socket,data){
    socket.emit('message', data);
}