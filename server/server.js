const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/Signup', (req, res) => {
  const userData = req.body;
  console.log('Received user data:', userData);
  res.send('User data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
