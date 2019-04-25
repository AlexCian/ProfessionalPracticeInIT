var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://moecherry1:moecherry1@ds255970.mlab.com:55970/lab7';
//var firebase = require("firebase/app");

/*require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

var config = {
    // ...
};
firebase.initializeApp(config);
*/
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    content: String
})
var PostModel = mongoose.model('post', postSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
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

app.post('/api/posts', function(req, res){
    console.log("Success!");
    console.log("Email: "+req.body.title);
    console.log("Message: "+req.body.content);

    PostModel.create({
        title: req.body.title,
        content: req.body.content
    });
    res.send('Item added');

})

app.get('/api/posts', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
})

app.delete('/api/posts/:id', function(req, res){
    console.log("Doughnut id deleted : "+req.params.id);

    PostModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Host at http://%s:%s", host, port)

function CartForm($scope) {
  

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }
}
})
