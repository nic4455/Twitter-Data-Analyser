# Presentation

## Description & Motivation

Twitter has become where the most extreme opinions float to the top. We wanted a way to show a correlation between the people's expressions and the media consumed. The most obvious example is our President of the United States of America, @realDonaldTrump.

For our UI, we wanted something light-weight that wouldn't look like a cookie-cutter site. Material design is one of the most popular frameworks to use in 2018, css-oriented, mobile-resoponsive framework.
`explain code`

Our application shows tweets by @realDonaldTrump and latest news by Fox.
`explain code`

Since we encountered some challenges to implemente replacing the username parameter in the GET call, we decided to focus on Donald Trump's diction and chirp schedule.

For POTUS' word choice, we decided to use a word map to show emphasis on the most frequent words used.
`explain code`

The chirp schedule is displayed using a bar chart with the x-axis as the time of the day and the y-axis as the number of tweets.
`explain code`

For the overall Twitter GET calls, we went with node.js to serve the files on our localhost port.
`explain code`

## Challenges

- We wanted to show a section to replace the username used to GET tweets, but were not able to in the time alloted
- Live server reload issues due to not serving all app files

## Improvements

- Add an input field to replace the username parameter in the GET tweets call
- Allow user to change count parameter for GET tweets call
- Save tweets favorites from any username in a collection library
- Use the new username parameter for the word cloud and the bar chart analysis
- Add any other news source based on different options by News API by user on-demand
- Customize bar chart and word cloud
- Omit certain words from word cloud