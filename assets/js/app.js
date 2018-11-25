// Initialize Firebase

var config = {
    apiKey: "AIzaSyB_zXnNbvnEYRsYGSpumtV-jiADhtmvhtM",
    authDomain: "utcodingbootcampproject1.firebaseapp.com",
    databaseURL: "https://utcodingbootcampproject1.firebaseio.com",
    projectId: "utcodingbootcampproject1",
    storageBucket: "utcodingbootcampproject1.appspot.com",
    messagingSenderId: "316462943623"
};
firebase.initializeApp(config);

// var Twitter = require('twitter');

// var client = new Twitter({
//     consumer_key: 'yzN77wlVgq2nGEeJvEcOjsfrK',
//     consumer_secret: 'sa4AR1fE3sXxj3ObsfRzN6uRQUzfhUMNIjFzlT6roIBmCG6jO0',
//     access_token_key: '21171830-Sqkf5YcRIpkt9Lg6kfHnFLr7z1MnoDl0GreZq52wD',
//     access_token_secret: 'fwCQG8mAvTtUF8JqH2B3R2F8IJ5v6UkrXgRhfiBCp4ZTE'
// });

// // Declaring parameters for GET below
// var params = { screen_name: 'potus', count: 3 };
// // Making GET for tweetsTimestamp and tweetsText
// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//         for(var v = 0; v < tweets.length; v++){
//             var tweetsTimestamp = tweets[v].created_at;
//             var tweetsText = tweets[v].text;

//             console.log(tweetsTimestamp,tweetsText);
//         }
//     }
// });
  
 


// function fetchData() {
//   var frequencyArray = [];
//   var url = 'assets/data.json'
//   fetch(url).then(response => {
//     return response.json();
//   }).then(data => {

//   }).catch(err => {
//     $('error').text('Data not retrieved')
//   });
// }
// fetchData();
