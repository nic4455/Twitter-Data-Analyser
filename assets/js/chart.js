$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyB_zXnNbvnEYRsYGSpumtV-jiADhtmvhtM",
    authDomain: "utcodingbootcampproject1.firebaseapp.com",
    databaseURL: "https://utcodingbootcampproject1.firebaseio.com",
    projectId: "utcodingbootcampproject1",
    storageBucket: "utcodingbootcampproject1.appspot.com",
    messagingSenderId: "316462943623"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  var arr = [];
  var a = [], b = [], prev;

  database.ref().on('child_added', function(snapshot){
    var timeStamp = snapshot.val().tweetTimestamp;
    console.log('timestamp, ', timeStamp);
    timeStamp = timeStamp.split(' ');
    var newTime = timeStamp[3]
    newTime = newTime.split(':')
    bTime = newTime[0]
   arr.push(bTime) 
   })

database.ref().endAt().limitToLast(1).on('child_added', function (snapshot) {
       snapshot.forEach(function (childSnapshot) {
          //  console.log("childSnapshot", childSnapshot.val())
           var childData = childSnapshot.val().timestamp;
          //  console.log("childata", childData)
          childData = childData.split(' ')
          // console.log("childata", childData[3])
          var time = childData[3];
          time = time.split(':');
          arr.push(time[0])          
       })
      
// console.log(arr)
//grouping timestamp for x and y axis
function foo(arr) {
  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
    // console.log(arr[i.length])
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }
  return [a, b];
}
// console.log('arr', arr)
console.log('a', a)
console.log('b', b)
foo(arr)
//pushing data into chart
var canvas = document.getElementById('myChart');
var data = {
  labels: a,
  datasets: [
    {
      label: "Trump Tweets Chart",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(17,144,221,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(17,144,221,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(17,144,221,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: b,
    }
  ]
};
var option = {
  showLines: true
};
var myBarChart = Chart.Bar(canvas, {
  data: data,
  options: option
});

}); 
  

});