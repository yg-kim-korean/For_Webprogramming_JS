var firstDay = new Date('2012-12-18');
var now = new Date();

var toFirst = firstDay.getTime();
var toNow = now.getTime();
var PassedDay = Math.round( (toNow-toFirst) / (24*60*60*1000));

document.querySelector('#accent').innerText = PassedDay