const express = require('express');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname), 'client/build'));

app.use('/api/puzzles', require('./routes/api/puzzles'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
