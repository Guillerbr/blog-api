const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const db = require('./config/db').database;

// database connection

mongoose.connect(db,
     {useNewUrlParser: true})
  .then(() => {

    console.log('Database Connected Sucess')

  })
  .catch((err) => {
      console.log('Unable to connect with the database', err)
  });


  //Define the PORT
  const port = process.env.PORT || 5000;

  // initialize cors middleware

  app.use(cors());

  // initialize BodyParser Middleware
  app.use(bodyParser.json());

  app.get('/', (req,res))