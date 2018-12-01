$(document).ready(function () {

    var database = firebase.database();
    var textTweetString;
    database.ref().endAt().limitToLast(1).on("child_added", function (snapshot) {
        var bigArray = [];
        var newArray = [];
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val().fulltext;
            newArray.push(childData)
        })
        textTweetString = newArray.join(' ');
        var tweetWordArray = [];
        tweetWordArray = textTweetString.split(" ");
        function compressArray(original) {
            var compressed = [];
            var copy = original.slice(0);
            for (var i = 0; i < original.length; i++) {
                var myCount = 0;
                for (var w = 0; w < copy.length; w++) {
                    if (original[i] == copy[w]) {
                        myCount++;
                        delete copy[w];
                    }
                }
                if (myCount > 0) {
                    var a = new Object();
                    a.value = original[i];
                    a.count = myCount;
                    compressed.push(a);
                }
            }
            return compressed;
        };
        var objectWordNum = compressArray(tweetWordArray)
        const removeBoringWords = objectWordNum.filter(word => {
            return (word.value !== 'the' && word.value !== 'to' && word.value !== 'is' && word.value !== 'with' && word.value !== 'of' && word.value !== 'in' && word.value !== '....' && word.value !== 'a' && word.value !== 'that' && word.value !== 'and' && word.value !== 'are' && word.value !== 'at' && word.value !== 'RT' && word.value !== 'they' && word.value !== 'on' && word.value !== 'have' && word.value !== 'this' && word.value !== 'for' && word.value !== 'all' && word.value !== 'The' && word.value !== 'has' && word.value !== 'be' && word.value !== 'very' && word.value !== 'it' && word.value !== 'will' && word.value !== 'just' && word.value !== 'an' && word.value !== "&amp;" && word.value !== "not" && word.value !== "-" && word.value !== "A" && word.value !== "I")
        })
        console.log("objectwordnum", removeBoringWords);
        console.log(' boring wordssss====>', removeBoringWords)
        const normalizedCloudWords = removeBoringWords.map(tweet => {
            bigArray.push({
                text: tweet.value,
                weight: tweet.count,
            })
        })
        console.log('normalizedddd ======>', normalizedCloudWords)

        $("#cloudContent").jQCloud(bigArray, {
            shape: "rectangular",
            center: {x:0.5, y:0.5},
            autoResize: true
        }); 
    });
})