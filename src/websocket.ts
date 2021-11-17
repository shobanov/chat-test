const ws = new WebSocket('wss://ws.qexsystems.ru');

export const wsAPI = {
  getMessage(message: string) {
    return message;
  },
  sendMessage(message: string) {
    return ws.send(message);
 },
};