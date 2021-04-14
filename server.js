// mongorestore --uri "mongodb+srv://ramtin:1234@cluster0.tj2u4.mongodb.net/"

const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "regal"
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

mongoose.connection.on('connected', function () {
    process.env.NODE_ENV === 'production' 
    ? 
      console.log(`Mongoose default connection open to ${process.env.MONGO_MLAB}`) 
    : 
      console.log(`Mongoose default connection open to ${process.env.MONGO_URI}`);
}); 

mongoose.connection.on('error',function (err) {
  console.log(`Mongoose default connection error: ${err}`);
}); 

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected'); 
});

if (process.env.NODE_ENV === "development") { 
  app.use(cors());
}

//Express v4.16.0 and higher now include middleware functionality. Body Parser is now deprecated for this use.
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'client')));

if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/build"));
}

const routes = require('./routes');
app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
})

app.get("*", function(req, res) {
  res.sendFile(path.resolve('client/build/index.html'));
});

app.listen(PORT, ()=> {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})

