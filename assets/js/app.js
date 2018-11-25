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

<<<<<<< HEAD
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
=======


// news apikey and query url set up
var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=1b5b156f36164922908fb04b4a91da79';
var articles;

// function for ajax call to get top 10 headlines and put them in a list and append to div.
// requires jquery and momentjs to run

function getHeadlines() {
    $.ajax({
        url: queryURL,
        method: "GET",
        success: function(response) {
            articles = response.articles;
            console.log(articles); 
            var newList = $("<ul>");
            for (var i = 0; i < articles.length; i++) {
                    
                    var headlines = $("<li>");
                    headlines.append(`<a href="${articles[i].url}" target="_blank">${articles[i].title} </a>
                    <p>Posted: ${moment.utc(articles[i].publishedAt).subtract(6, "hours").format('LLLL')}</p>`);
                    newList.append(headlines);    

                //this is where we would input the div to put the headlines ".headlines"
                    $(".headlines").append(newList); 
            } 
        },

        //error handling message
        error: function(status, code, message) {
            $(".headlines").append(`There was an ${code} - ${message}`);
        },
    
    });
} 

//function to call for the headlines to appear
getHeadlines();
>>>>>>> 40c52e6627e022be6d209f8f305928521ef0c0e7
