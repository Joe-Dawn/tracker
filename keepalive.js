const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.redirect('https://phantom.is-a.dev/support');
});

function run() {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
  });
}

function keepAlive() {
  run();
}

keepAlive();
