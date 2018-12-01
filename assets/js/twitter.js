// var Twitter = require('twitter');
// var http = require('http');
// var fs = require('fs');
// var firebase = require('firebase');

// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyB_zXnNbvnEYRsYGSpumtV-jiADhtmvhtM",
//     authDomain: "utcodingbootcampproject1.firebaseapp.com",
//     databaseURL: "https://utcodingbootcampproject1.firebaseio.com",
//     projectId: "utcodingbootcampproject1",
//     storageBucket: "utcodingbootcampproject1.appspot.com",
//     messagingSenderId: "316462943623"
// };
// firebase.initializeApp(config);
var database = firebase.database();

// Declaring API keys
// var client = new Twitter({
//     consumer_key: 'yzN77wlVgq2nGEeJvEcOjsfrK',
//     consumer_secret: 'sa4AR1fE3sXxj3ObsfRzN6uRQUzfhUMNIjFzlT6roIBmCG6jO0',
//     access_token_key: '21171830-Sqkf5YcRIpkt9Lg6kfHnFLr7z1MnoDl0GreZq52wD',
//     access_token_secret: 'fwCQG8mAvTtUF8JqH2B3R2F8IJ5v6UkrXgRhfiBCp4ZTE'
// });

// Declaring parameters for GET below
// var params = { screen_name: 'realDonaldTrump', count: 3 , tweet_mode: 'extended'};

// GET tweetsTimestamp and tweetsText
// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     // If no error occurs then run the loop inside
//     if (!error) {

//         // Count parameter equals to the tweets length
//         for(var v = 0; v < tweets.length; v++){

//             // console.log(tweets)

//             // Creating vars for tweets timestamp and full text
//             var tweetsTimestamp = tweets[v].created_at;
//             var tweetsText = tweets[v].full_text;

//             console.log(tweetsTimestamp, tweetsText);

//             // Pushing tweets to Firebase
//             // database.ref().push({
//             //     tweetText: tweetsText,
//             //     tweetTimestamp: tweetsTimestamp,
//             //     dateAdded: firebase.database.ServerValue.TIMESTAMP
//             // });
//         }
//     }
// });

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
// client.stream('statuses/filter', { track: 'Donald Trump' }, function (stream) {
//     stream.on('data', function (tweet) {
//         console.log(tweet.text);
//     });

//     stream.on('error', function (error) {
//         console.log(error);
//     });
// });

// Live reload server
// function onRequest(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// }

// http.createServer(onRequest).listen(8000);