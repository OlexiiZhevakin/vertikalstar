const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();

const port = 3000; // Ваш бажаний порт
const hostname = '127.1.0.222'; // Ваш бажаний хост

app.prepare().then(() => {
  const server = express();

  // Додайте обробник для всіх запитів
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Слухайте на зазначеному хості та порту
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
