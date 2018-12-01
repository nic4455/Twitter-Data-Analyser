# Presentation

## Description & Motivation

Twitter has become where the most extreme opinions float to the top. We wanted a way to show a correlation between the people's expressions and the media consumed. The most obvious example is our President of the United States of America, @realDonaldTrump.

For our UI, we wanted something light-weight that wouldn't look like a cookie-cutter site. Material design is one of the most popular frameworks to use in 2018, css-oriented, mobile-resoponsive framework.

### Nathan

"As a development team with a short deadline to deliver the project, it made sense to use a frontend CSS framework that had default styling that we could quickly leverage and customize to fit the needs of our project.

Although we were seeking a preexisting framework, we also wanted to deliver a design that was modern, clean, and crisp.

Everyone knows of bootstrap, which is a front end framework created by Twitter. For our project we chose Material Design, which is a design concept created by Google for all of their applications such as Gmail, their Android operating system, and so on.

We used a CSS framework called Materalize.

While the concept of materialize is the same Twitter bootstrap, it required a little bit of a learning curve because the CSS classes are different.

The Materialize code base is also a bit more heavy than bootstrap, making the learning curve slightly more tedious as we were coding to leverage CSS classes and not reinvent the wheel.

Overall, I’m pleased without the turnout of the UI. Although the code base was a little but heavier, it’s still fast, mobile responsive, and looks like a modern website that you would find in 2018.

If there is one thing that I would like to spend more time on, it would tweaking the padding in our link anchor tags."

Our application shows tweets by @realDonaldTrump and latest news by Fox, because Fox is his choice of trash news.

### Harpal

- Problem
  - Grabbing a certain News Station (Fox) top headlines and displaying them on the front end in a list
- Execution
  - i used an AJAX call to get a JSON file from News API and looped through the amount of articles in the top headlines. I then dynamically created a list in the HTML with the article's headline, it's URL to link to, and the time it was published at. I then used Moment JS to convert the time to Central standard time.
  - i also created an error handler so that if there is any issue with the ajax call, it will post a response type instead of being blank.
- Challenges
  - it was a challenge to correctly set up the AJAX call with error handling and tricky to convert the initial string of numbers into central time using Moment JS
- Improvements
  - it would be nice to have the news auto-update without the need to refresh the page.
  - i could also add buttons for a few different news sources to toggle between

Since we encountered some challenges to implemente replacing the username parameter in the GET call, we decided to focus on Donald Trump's diction and chirp schedule.

### Ian

- We installed npm modules for twitter, http, and firebase using node.js in the CLI
  - Twitter module is used to get historical tweets from Twitter
  - HTTP is used to continue streaming live tweets to firebase DB
  - Firebase is used to save historical tweets and live tweets with full text, timestamp by @potus and @realDonaldTrump
- Challenges
  - Getting the live stream to save into firebase, but after running the live server and doing an event trigger when there was a new tweet by POTUS or realDonaldTrump, the tweet is saved as a new child object in firebase
  - Replacing parameters and finding the right syntax for twitter API after installing it as a dev dependency
- Improvements
  - Replacing the username parameter dynamically to allow users to see other tweets alongside Fox News headlines

For POTUS' word choice, we decided to use a word cloud to show emphasis on the most frequent words used.

### Nic

a.    Approach: Word clouds can be a bit cliched in 2018, but if they are large enough I think they can still be useful in conveying broad patterns.  We thought Trump’s prolific use of twitter, and his terse communication style were a good match for word clouds.  The internet is full of word cloud generators, but they are almost all non-dynamic websites, which just provide a text box input.  Luckily we found a simple jQuery library named jQcloud, which can dynamically generate clouds if given an object with values and weights.
b.    Explanation: I took the firebase data containing the tweets, collated it into a large array, then counted they number of times each word appeared.  After shifting the words from the large array to a single giant string, I filtered out prepositions, pronouns, and other simple words, and created an object with each word tied to a weight for the cloud to plot.
c.    Problems:  jQcloud did not have great documentation, and there was little support online (no youtube tutorials, very little slack overflow).

The chirp schedule is displayed using a bar chart with the x-axis as the time of the day and the y-axis as the number of tweets.

### Felix

Plan: To give users the tool to keep track of times of tweets and how often he tweets at various hours.
Execution: retreived the timestamps from the database and splited it to get the hour of tweets
Challanges: Finding the right chart that was flexible to manipulate
Improvement : To make the time more precise and also include labels for the X and Y axis

## Improvements

- Add an input field to replace the username parameter in the GET tweets call
- Allow user to change count parameter for GET tweets call
- Save tweets favorites from any username in a collection library
- Use the new username parameter for the word cloud and the bar chart analysis
- Add any other news source based on different options by News API by user on-demand
- Customize bar chart and word cloud
- Omit certain words from word cloud