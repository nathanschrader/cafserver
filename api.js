var express = require('express');
var app = express();

function cafeteria(){
  this.votes = [],
  this.comments = [],
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
  },
  this.addComment = function(comment){
    this.comments.push(comment);
  },
  this.getComments = function(){
    return this.comments;
  }

};

var mainLine = new cafeteria();
var chefLine = new cafeteria();
var glutenFree = new cafeteria();
var sandwichLine = new cafeteria();
var wrapLine = new cafeteria();

/* API URLS */

/* GET SCORES */
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


/* VOTING */
app.post("/setMainLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
});

app.post("/setChefLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
});

app.post("/setGlutenFreeScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
});

app.post("/setSandwichLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
});

app.post("/setWrapLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
});

/* GET COMMENTS */
app.get('/getMainlineComments', function (req, res) {
  res.end(JSON.stringify(mainLine.getComments()));
});

app.get('/getCheflineComments', function (req, res) {
  res.end(JSON.stringify(chefLine.getComments()));
});

app.get('/getGlutenFreeComments', function (req, res) {
  res.end(JSON.stringify(glutenFree.getComments()));
});

app.get('/getSandwichLineComments', function (req, res) {
  res.end(JSON.stringify(sandwichLine.getComments()));
});

app.get('/getWraplineComments', function (req, res) {
  res.end(JSON.stringify(wrapLine.getComments()));
});

/* ADD COMMENTS */

app.post("/addMainLineComment/:comment", function(req, res){
  mainLine.addComment(req.params.comment);
  res.sendStatus(200);
});

app.post("/addChefLineComment/:comment", function(req, res){
  chefLine.addComment(req.params.comment);
  res.sendStatus(200);
});

app.post("/addGlutenFreeComment/:comment", function(req, res){
  glutenFree.addComment(req.params.comment);
  res.sendStatus(200);
});

app.post("/addSandwichLineComment/:comment", function(req, res){
  sandwichLine.addComment(req.params.comment);
  res.sendStatus(200);
});

app.post("/addWrapLineComment/:comment", function(req, res){
  wrapLine.addComment(req.params.comment);
  res.sendStatus(200);
});






app.listen(3000, function () {
  console.log('listening on port 3000!');
});
