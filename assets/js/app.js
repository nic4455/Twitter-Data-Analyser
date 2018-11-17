
var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=1b5b156f36164922908fb04b4a91da79';
var articles;

// function for ajax call to news  API to get an array of Fox News top headlines.

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
                    $(".headlines").append(newList); 
            } 
        },
        error: function(response, code, message) {
            $(".headlines").append(`${code}: ${message}`);
        },
    
    });
} 

var chart = bb.generate({
    bindto: "#chart",
    data: {
        type: "bar",
        columns: [
            ["tweet time", 1, 3, 5, 3, 2, 1],
            
        ]
    }
});

getHeadlines();