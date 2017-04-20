const express = require('express');
const index = require('./routes/index')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/',index);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eventorganizer');
mongoose.connection.on('connected', () => {
  console.log('Database Connected...');
})


app.listen(3000, () => {
  console.log('Server is Running...');
})
