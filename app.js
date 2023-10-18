const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or 3000 if not defined

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
