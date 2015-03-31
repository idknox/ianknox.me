$(document).ready(function () {

  function displayChart(languages) {
    $('.loading').hide();
    $('.graph-language').show()

    $("#graph").highcharts({
      colors: ['#7cb5ec', '#701516', '#90ed7d', '#f7a35c', '#8085e9',
        '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      credits: {enabled: !1},
      chart: {
        backgroundColor: "transparent",
      },
      title: {text: null},
      tooltip: {formatter: function () {
        return "\u25cf <strong>Characters:</strong> " + this.y + "<br>\u25cf <strong>Lines:</strong> " + (this.y / 30).toFixed(0);
      }},
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [
        {type: "pie", name: "Repos", data: languages, dataLabels: {enabled: true}}
      ]
    });
  }

  $('.graph-language').hide();

  var promise = $.getJSON('/chart.json');
  promise.success(displayChart)
});