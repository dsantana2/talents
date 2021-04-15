const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send("Welcome To The Home Pagee");
});

app.listen(port, () => {
  console.log("Port 3000");
});