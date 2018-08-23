var express = require ('express');
var app = express();
var configFile= require('../../config');
const bodyParser = require('body-parser');
var router=express.Router();
var fashionRouter=require('../routes/fashionData/fashion');
var electronicsRouter=require('../routes/electronicsData/electronics');
var watchesData=require('../routes/watchesData/watches');
var booksData=require('../routes/booksData/books');
var uploadData=require('../routes/dataUpload/dataUpload');
var mainPageData=require('../routes/mainPageData/mainPageData');
var authentication = require('../routes/auth/authSellor');
var sellorProfile = require('../routes/sellorProfile/dashboard')
var cors = require('cors');
var path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myEkartAppDB');
var config=require('../../config');
var finalPath = path.join(__dirname + './../public');

app.use(express.static(finalPath)); //Serves resources from public folder
//cors
app.use(cors());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api/uploadData',uploadData);
app.use('/api/electronics',electronicsRouter);
app.use('/api/fashion',fashionRouter);
app.use('/api/books',booksData);
app.use('/api/watches',watchesData);
app.use('/api/auth',authentication);
app.use('/api/mainPageData',mainPageData);
app.use('/api/auth/profile',sellorProfile);
app.use('/', function (req,res) {
    res.sendFile(finalPath + '/index.html');

})


app.listen(config.port,function () {
    console.log(`listening server at port ${config.port}`);
})
