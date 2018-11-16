$(document).ready(function(){
    var words = [
        { text: "huge", weight: 17 },
        { text: "Melania", weight: 10.5 },
        { text: "Donald", weight: 9.4 },
        { text: "Trump", weight: 8 },
        { text: "FBI", weight: 21 },
        { text: "Russian", weight: 5 },
        { text: "Putin", weight: 5 }
    ];

    var trumpsWords =
        $("#keywords").jQCloud(words, {
            width: 500,
            height: 350
        });
})