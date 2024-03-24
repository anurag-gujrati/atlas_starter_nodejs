const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const {fetchCustomer} = require('./app');

const port = 9001;
app.listen(port, () => {
  console.log('We are live on port ' + port);
});



app.post('/customer', (req, res) => {
    // Handle creating a new note in the database
    // ...
  });
  
  // Get all notes
  app.get('/customer', (req, res) => {

    ///user/:id, use req.params.id 
    let customers=[];
    console.log ("request recieved");
    console.log(req.query.salary);
     fetchCustomer(req.query.salary)
    .then ((customers) => {

        res.json(customers);
    })
    .catch(console.dir);
   
    // Retrieve all notes from the database
    // ...
  });