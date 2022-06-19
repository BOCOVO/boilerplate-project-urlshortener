require('dotenv').config();
const bodyParser = require("body-parser");
const shortUrlRoutes = require("./src/routes/shortUrlRoutes")
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

// connect to the database
mongoose.connect(process.env.DB,{},()=>{
  console.log("Connected to DB");
})

// body parse middleares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// shorturl routes
app.use("/api/shorturl",shortUrlRoutes);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
