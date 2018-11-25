  window.onload = function() {
    
    // function fetchData() {
      
    //   var frequencyArray = [];
    //   var url = '/data.json'
    //   fetch(url).then(response => {
    //     console.log('hello')
    //     return response.json();
    //   }).then(data => {
    // console.log('data', data)
    //   }).catch(err => {
    //     $('error').text('Data not retrieved')
    //   });
    // }
    // fetchData();
    var dataPoints = [];
    
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Trump Chart"
      },
      axisX: {
         title: "Date of Tweets"
      },
      axisY: {
        title: "Number of Times",
        titleFontSize: 18
        
      },
      data: [{
        type: "column",
        yValueFormatString: "#,# Units",
        dataPoints: dataPoints
      }]
    });
    
    function addData(data) {
      // console.log(data)
      for (var i = 0; i < data.length; i++) {
        var timeStamp = data[i].created_at
        timeStamp = timeStamp.split(' ');
        var month = timeStamp[1]
        var year = timeStamp[5]
        var time = month + ' ' + year;
        console.log(time)
        dataPoints.push({
          x: new Date(data[i].created_at),
          //change the units and replace it with number of tweets
          y: data[i].units
        });
      }
      chart.render();
      
    
    }
    
    $.getJSON("data.json", addData);
    
};


