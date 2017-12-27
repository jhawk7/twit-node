const express = require("express");
const Twitter = require("twitter");

const app = express();

const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

app.get("/favs", function(req, res) {

    // https://developer.twitter.com/en/docs/tweets/post-and-engage/overview - API documentation
    client.get('favorites/list', function(error, tweets, response) { 
        if(error) throw error;
        res.status(200).send(tweets);  // The favorites. 
      });
})

app.get("/jj", function(req,res) {
    //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
    client.get(' https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=143288218', function(error, tweets, response) {
        if(error) throw error;
        res.status(200).send(tweets);
    });
}) 

app.get("/jp", function(req,res) {
    //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
    client.get(' https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=mutedperspectiv', function(error, tweets, response) {
        if(error) throw error;
        res.status(200).send(tweets);
    });
}) 

app.get("/kd", function(req,res) {
    //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
    client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=klynndeeee', function(error, tweets, response) {
        if(error) throw error;
        res.status(200).send(tweets);
    });
}) 

app.listen(3040);