$(document).ready(function () {
  $('#loading').hide();
  $(function () {
    $('#chart').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
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
        {
          type: 'pie',
          name: 'Browser share',
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ]
        }
      ]
    });
  });
  function displayChart(languages) {
    $('#loading').hide();

//    $("#chart").highcharts({chart: {backgroundColor: "transparent"}, title: {text: 'Code Languages'}, tooltip: {
//      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//    }, series: [
//      {type: "pie", name: "Repos", data: languages, dataLabels: {enabled: !0}}
//    ]});

  }

  $('.github > .header').on('click', function () {
    $(this).disabled = true;
    $('#loading').show();
    var promise = $.getJSON('/chart.json');
    promise.success(displayChart)
  })
});

//$(".repo-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
//  var t = "\u25cf <strong>Repos:</strong> " + this.y + " (" + this.percentage.toFixed(1) + "%)";
//  return t
//}}, series: [
//  {type: "pie", name: "Repos", data: chartHelper(e), dataLabels: {enabled: !0}}
//]});

//$(".code-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
//  var t = "\u25cf <strong>Characters:</strong> " + numberWithCommas(this.y) + "<br>\u25cf <strong>Lines:</strong> " + numberWithCommas((this.y / 30).toFixed(0));
//  return t
//}}, series: [
//  {type: "pie", name: "Characters", data: chartHelper(n), dataLabels: {enabled: !0}}
//]});