var d3 = require("d3");
var $ = require("jquery");
require("jquery-ui");
function id(x) {
    return x
}
var heightRange = 200;
var widthRange = 1000;
var t = 10;
var numberOfPoints = 20;

var svg = d3.select("svg");
var circle = svg.selectAll("circle").data(genData(numberOfPoints));
var circleEnter = circle.enter().append("circle")
    .attr("cx", function (d, i) {
        return i * 20 + 20
    })
    .attr("fill", function(d, i) {
        return d3.hsl(i/numberOfPoints * 180, 0.8, 0.45 )
    })
    .attr("cy", heightRange / 2);

circleEnter.attr("r", 10);

// returns an array of
function genData(n) {
    var res = [];
    for (var i = 0; i < n; i++) {
        res.push(i/widthRange)
    }
    return res
}

function update() {
    circle.transition() // gratuitous intro!
        .duration(300)
        .attr("cy", function (d) {
        t += 1/widthRange * 599
        return heightRange / 2 + Math.sin(d + t) * heightRange / 2
    })
}

setInterval(update, 100)

$('#slider').slider();