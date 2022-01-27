const path = require('path');
require('dotenv').config();
const cookieParser = require("cookie-parser");
const express = require('express');
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3001',
  methods: "GET, POST",
  optionsSuccessStatus: 200
}

const app = express();
const port = process.env.PORT || 3001;

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
app.use('/static', express.static(path.join(__dirname, "build/static")));
app.use('/manifest.json', express.static(path.join(__dirname, "build", "manifest.json")));

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
