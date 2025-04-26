const express = require('express');

const servers = [
  { port: 3000, message: 'Hello from Server 1 (port 3000)' },
  { port: 3001, message: 'Hello from Server 2 (port 3001)' },
  { port: 3002, message: 'Hello from Server 3 (port 3002)' },
];

servers.forEach(({ port, message }) => {
  const app = express();

  app.get('/', (req, res) => {
    res.send(message);
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
