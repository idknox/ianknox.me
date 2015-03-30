$(document).ready(function () {

  function displayChart(languages) {
    $('.loading').hide();

    $("#graph").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
      var t = "\u25cf <strong>Repos:</strong> " + this.y + " (" + this.percentage.toFixed(1) + "%)";
      return t
    }}, series: [
      {type: "pie", name: "Repos", data: languages.percent, dataLabels: {enabled: !0}}
    ]});

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
////$(".code-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
////  var t = "\u25cf <strong>Characters:</strong> " + numberWithCommas(this.y) + "<br>\u25cf <strong>Lines:</strong> " + numberWithCommas((this.y / 30).toFixed(0));
////  return t
////}}, series: [
////  {type: "pie", name: "Characters", data: chartHelper(n), dataLabels: {enabled: !0}}
////]});