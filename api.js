var express = require('express');
var app = express();

function cafeteria(){
  this.votes = [],
  this.getScore = function(){
    var score = 0;
    for(i = 0; i<this.votes.length; i++){
      score = score + this.votes[i];
    }
    score = score/this.votes.length;
    return score;
  },
  this.vote = function(usrVote){
    this.votes.push(usrVote);
  }
};

var mainLine = new cafeteria();
var chefLine = new cafeteria();
var glutenFree = new cafeteria();
var sandwichLine = new cafeteria();
var wrapLine = new cafeteria();


app.get('/getMainlineScore', function (req, res) {
  res.end(mainLine.getScore().toString());
});

app.get('/getCheflineScore', function (req, res) {
  res.end(chefLine.getScore().toString());
});

app.get('/getGlutenFreeScore', function (req, res) {
  res.end(glutenFree.getScore().toString());
});

app.get('/getSandwichlineScore', function (req, res) {
  res.end(sandwichLine.getScore().toString());
});

app.get('/geWraplineScore', function (req, res) {
  res.end(wrapLine.getScore().toString());
});

app.post("/setMainLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});

app.post("/setChefLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});

app.post("/setGlutenFreeScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});

app.post("/setSandwichLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});

app.post("/setWrapLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
