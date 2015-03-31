$(document).ready(function () {

  function displayChart(languages) {
    $('.loading').hide();
    console.log(languages)

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

  var promise = $.getJSON('/chart.json');
  promise.success(displayChart)
});


////$(".repo-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
////  var t = "\u25cf <strong>Repos:</strong> " + this.y + " (" + this.percentage.toFixed(1) + "%)";
////  return t
////}}, series: [
////  {type: "pie", name: "Repos", data: chartHelper(e), dataLabels: {enabled: !0}}
////]});
//
//$(".code-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
//  var t = "\u25cf <strong>Characters:</strong> " + numberWithCommas(this.y) + "<br>\u25cf <strong>Lines:</strong> " + numberWithCommas((this.y / 30).toFixed(0));
//  return t
////}}, series: [
////  {type: "pie", name: "Characters", data: chartHelper(n), dataLabels: {enabled: !0}}
////]});