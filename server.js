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

app.post('/api/token', (req, res) => {
  const { token } = req.body;
  if(token && token !== "") {
    res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "Token successfully stored." });
  } else {
    res.status(404).json({ message: "No token obtained." });
  }
});

app.get('/api/token', (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(403).json({ message: "Unauthorized, please login to access resource" })
  }
  res.status(200).json({ token: token })
});

app.get("/api/logout", (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😀, Please come back soon." });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
