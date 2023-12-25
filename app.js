const socket = new WebSocket('wss://Whnneeww.com:8080');

socket.onopen = () => {
  console.log('Connected to server');
  // サーバーとの接続が確立された後の処理を行う
};

socket.onmessage = (event) => {
  const message = event.data;
  console.log('Received:', message);
  // 受信したメッセージの処理を行う
};

socket.onclose = () => {
  console.log('Disconnected from server');
  // サーバーとの接続が切断された後の処理を行う
};

// メッセージの送信
socket.send('Hello, server!');
