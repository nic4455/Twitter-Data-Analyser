var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        datasets: [{
            label: '# of tweets',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9,10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


function fetchData() {
    // const url= 'assets/data.json';
    // fetch(url)
    // .then(function(resp){
    //   console.log(resp.json());
    // })
    // Replace ./data.json with your JSON feed
    var frequencyArray = [];
    //replace the  value in the url with the twitter api endpoint
    var url = 'assets/data.json'
fetch(url).then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    
    console.log('data',data);
    for (var i = 0; i < data.length; i++){
        console.log('anything')
        console.log('data.created_at',data.created_at);
        frequencyArray.push(data[i].created_at)
        
    }
    
  }).catch(err => {
    // Do something for an error here
    
  }).then(function(){
    console.log(frequencyArray);
  });
  
}
fetchData();