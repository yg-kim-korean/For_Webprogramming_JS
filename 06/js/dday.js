var now = new Date();
var firstDay = new Date('2012-12-18');

var toNow = now.getTime(); // 오늘날짜 밀리 초로 바꿈
var toFirst = firstDay.getTime(); // 그날 밀리초로 바꿈
var passedTime = toNow-toFirst; // 날짜 계산

var passedDay = Math.round(passedTime/(1000*60*60*24)); // 밀리초를 날짜로 변환

document.querySelector('#accent').innerText = passedDay +"일";


/* 100일 */
var future = toFirst + 100 *(1000*60*60*24); //만난지 100일
var someday = new Date(future); //계산

var year = someday.getFullYear(); // 연도가져오기
var month = someday.getMonth(); // 연도가져오기
var date = someday.getDate(); // 연도가져오기

document.querySelector("#date100").innerText = year+"년 "+month+"월 "+date+"일";
/* 200일 */

function calcDate(days) {
    var future = toFirst + days *(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear(); // 연도가져오기
    var month = someday.getMonth(); // 연도가져오기
    var date = someday.getDate(); // 연도가져오기

    document.querySelector("#date" + days).innerText = year+"년 "+month+"월 "+date+"일";

}
calcDate(200);
calcDate(365);
calcDate(500);
