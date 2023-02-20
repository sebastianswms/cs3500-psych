const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // The video names come here for video labels
    labels: ['video 1', 'video 2', 'video 3', 'video 4'],
    datasets: [{
      // we can get the data from any variable for this one
      data: [23, 90, 44, 55],
      backgroundColor: "#4082c4",
      },
    ],
  },
  options: {
        "animation": {
          "duration": 1,
          "onComplete": function() {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            // this function displays each data on top of each bar
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
            });
          }
        },
    legend: {display: false},
    scales: {
      // set the y-axis to 100
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            callback: function (value) {
              return value+'%';
            },
          },
        },
      ],
    },
  },
});


// this funciton is to enable the button to download the graph as png 
function downloadChart() {
  const canvas = document.getElementById('myChart');
  const downloadLink = document.createElement('a');
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.download = 'Result.png';
  downloadLink.click();
}