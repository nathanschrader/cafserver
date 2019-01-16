//-------------------------------------------------------------------------
// Server component of the Mobile App Development group project
//
//-------------------------------------------------------------------------


/*
  This tutorial referenced:
  https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
*/

var vote = 0;
var express = require('express');
var app = express();

app.get('/getCount', function (req, res) {

      res.end(JSON.stringify(vote));
})

app.post('/upvote', function (req, res) {
   // First read existing users.
      vote = vote + 1;
      console.log("upvoted: " + vote);
      res.end();
})

app.post('/downvote', function (req, res) {
   // First read existing users.
      vote = vote - 1;
      console.log("downvoted: " + vote);
      res.end();
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
