const express = require('express');
const app = express();
const routerUser = require('./routing/user.rout')

app.use(express.json());
app.use(routerUser);
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});