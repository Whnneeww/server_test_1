const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
    // メッセージの処理やクライアントへのレスポンスを行う
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    // クライアントの切断時の処理を行う
  });
});
