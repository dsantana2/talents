const express = require('express');
const app = express();
// const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send("Welcome To The Home Pagee");
});

app.listen(3000, () => {
  console.log("Port 3000");
});