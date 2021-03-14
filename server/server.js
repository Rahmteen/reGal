// mongorestore --uri " mongodb+srv://ramtin:1234@cluster0.tj2u4.mongodb.net/"

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

const env = require('dotenv').config()

const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb+srv://ramtin:1234@cluster0.tj2u4.mongodb.net"

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

mongoose.connection.on('connected', function () {
    process.env.NODE_ENV === 'production' ? 
    console.log(`Mongoose default connection open to ${process.env.MONGO_MLAB}`) 
    : console.log(`Mongoose default connection open to ${process.env.MONGODB_LOCALHOST}`);
  }); 
  mongoose.connection.on('error',function (err) {
    console.log(`Mongoose default connection error: ${err}`);
  }); 
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected'); 
  });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'public'))); // Static directory (makes public directory)

if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/dist"));
}

const routes = require('./routes')

app.use(routes)

  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname + '../dist/index.html'));
});

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));



app.listen(PORT, ()=> {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})

