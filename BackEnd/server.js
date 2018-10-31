var express = require('express');//npm install express
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');//npm install mongoose

var mongoDB = 'mongodb://moecherry1:moecherry1@ds255970.mlab.com:55970/lab7';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;

var postSchema = new Schema ({
    title : String,
    content : String
})

var postModel = mongoose.model('post', postSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.get('/api/posts', function(req, res)
{
    postModel.find(function(err, data)
    {
        if(err)
        res.send(err);
        res.json(data);
    })
})

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);
    postModel.find()
    res.json();
    postModel.create({
    title:req.body.title,
    content:req.body.content
    })
})

app.get('/api/posts', function(req, res){

    const posts = 
    [
        { 
            "id": "fadf12421l", 
            "title": "First server-side post", 
            "content": "This is coming from the server" 
        }, 
        { 
            "id": "ksajflaj132", 
            "title": "Second server-side post", 
            "content": "This is coming from the server!" 
        }
    ];

    res.status(200).json({posts:posts})
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})