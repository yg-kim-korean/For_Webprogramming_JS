function openPop(){
    var newWin = window.open("popup.html"," ","width=400, height = 400");
    if (newWin == null){ // 크롬 팝업 차단 되어있을 경우
        alert("팝업이 차단되어 있습니다. 해제하고 새로고침해주세요")
    }
}
window.onload = openPop()