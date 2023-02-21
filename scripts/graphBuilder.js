import {cookieParse} from './cookieManagement.js';

const ctx = document.getElementById('myChart');

const selection = cookieParse("selection"); // Get all selected videos.
const titles = cookieParse("titles");
const option = cookieParse("option"); // Get counts for how many times each option has been chosen.
var label = [];
var percent = [];
var total = option.reduce((i,j) => i+j, 0) // The total number of selections for all options.
selection.forEach(element => label.push(titles[element])); // Put each title into a new array.
option.forEach(element => percent.push(element*100/total));

console.log(label);
console.log(option);

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // The video names come here for video labels
    labels: label,
    datasets: [{
      // we can get the data from any variable for this one
      data: percent,
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
                var data = dataset.data[index] + "%";
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


// this function is to enable the button to download the graph as png
function downloadChart() {
  const canvas = document.getElementById('myChart');
  const downloadLink = document.createElement('a');
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.download = 'Result.png';
  downloadLink.click();
}