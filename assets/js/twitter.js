// To do items
//  1 save GET response into vars for @nic and @felix features
//  1.2 for @nic, save vars for timestamps
//  1.3 for @felix, save vars for tweets text
//  2 install a live reload (lr) http server for app
//  2.1 test lr to make sure app works fine with tweets data
//  2.2 can we use firebase instead of lr?
//  2.3 make sure that everyone can connect to app when meeting in person using lr

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'yzN77wlVgq2nGEeJvEcOjsfrK',
    consumer_secret: 'sa4AR1fE3sXxj3ObsfRzN6uRQUzfhUMNIjFzlT6roIBmCG6jO0',
    access_token_key: '21171830-Sqkf5YcRIpkt9Lg6kfHnFLr7z1MnoDl0GreZq52wD',
    access_token_secret: 'fwCQG8mAvTtUF8JqH2B3R2F8IJ5v6UkrXgRhfiBCp4ZTE'
});

// Declaring parameters for GET below
var params = { screen_name: 'potus', count: 3 };
// Making GET for tweetsTimestamp and tweetsText
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        for(var v = 0; v < tweets.length; v++){
            var tweetsTimestamp = tweets[v].created_at;
            var tweetsText = tweets[v].text;

            console.log(tweetsTimestamp,tweetsText);
        }
    }
});

// Not sure if this command worked or not, but @ianbunn need to research
// twitter.getUserTimeline({ screen_name: 'POTUS', count: '10' }, error, success);