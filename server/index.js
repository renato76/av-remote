const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8082 })

wss.on('conection', ws => {
  console.log('New client connected!')

  ws.on('close', () => {
    console.log('Client has disconected!')
  })
})