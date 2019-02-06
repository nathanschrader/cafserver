var express = require('express');
var app = express();

function cafateria(){
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

var mainLine = new cafateria();

app.get('/getMainlineScore', function (req, res) {
  res.end(mainLine.getScore().toString());
});

app.post("/setMainLineScore/:vote", function(req, res){
  mainLine.vote(parseInt(req.params.vote));
  res.sendStatus(200);
  console.log(req.params.vote);
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
