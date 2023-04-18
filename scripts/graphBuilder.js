import {cookieParse} from './cookieManagement.js'; // Import functionality for reading JSON cookies.

const ctx = document.getElementById('myChart'); // Create a chart object.

const selection = cookieParse("selection"); // Get all selected videos.
const titles = cookieParse("titles");
const option = cookieParse("option"); // Get counts for how many times each option has been chosen.
var label = [];
var percent = [];
var total = option.reduce((i,j) => i+j, 0) // The total number of selections for all options.
selection.forEach(element => label.push(titles[element])); // Put each title into a new array.
option.forEach(element => percent.push(Math.round(element*100/total))); // Calculate and store each percentage.

// Defines a new chart object with information as specified by the user's choices.
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // The video names come here for video labels
    labels: label,
    datasets: [{
      // we can get the data from any variable for this one
      data: percent,
      backgroundColor: "black", 
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
          // added a y-axis title
          scaleLabel: {
            display: true,
            labelString: 'Percentage of Selection'
          },
          stacked: true,
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            // The values on the y-axis appear in increments of 20
            stepSize: 20,
            callback: function (value) {
              return value;
            },
          },
          // removes the grid line on y-axes from background
          gridLines: {
            display: false
          },
        },
      ],
      //removes the grid lines on x-asix from background
      xAxes: [{
        gridLines: {
          display: false
        },
        // added an x-axis title
        scaleLabel: {
          display: true,
          labelString: "Picture"
        }
      }]
    },
  },
});

/*
    Input: None.

    Output: A PNG image with a custom name is generated of the chart.

    Remarks: If the user already has a file called Result.png, a number will be automatically appended to the file name.
*/
window.downloadChart = function downloadChart() {
  const canvas = document.getElementById('myChart');
  // creating a new chart with white background color
  const newChart = document.createElement('canvas');
  newChart.width = canvas.width;
  newChart.height = canvas.height;
  const ctx = newChart.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, newChart.width, newChart.height);
  // convert the new chart to an images
  const chartImage = canvas.toDataURL();
  const newImg = new Image();
  newImg.onload = function () {
    ctx.drawImage(newImg, 0, 0);
    const downloadLink = document.createElement('a');
    downloadLink.href = newChart.toDataURL();
    // let user enter a custom file name
    const custome_name = prompt("Enter a custom name:", "Result");
    // download with the user's custom name
    if (custome_name !== null) {
      downloadLink.setAttribute('download', custome_name);
    }
    downloadLink.click();
  }
  newImg.src = chartImage;
}