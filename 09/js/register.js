var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");
pw1.onchange = checkPw;
pw2.onchange = comparePw;
userId.onchange = checkId;

function checkId(){
    if (userId.value.length < 4 || userId.value.length > 15){
        alert("4~5자리로 입력하시오");
        userId.select(); // 값을 지우지 않고 값을 선택하고 포커스주고싶으면
    }
}

function checkPw(){
    if (pw1.value.length < 8){
        alert("비밀번호는 8자리 이상임;;");
        // pw1.value = "";
        pw1.focus(); // 값을 지우고 텍스트 필드에 커서 주고싶으면
    }
}

function comparePw(){
    if (pw1.value != pw2.value){
        alert("암호 다름; 제대로좀 하셈");
        // pw2.value = "";
        pw2.focus(); // 값을 지우고 텍스트 필드에 커서 주고싶으면
    }
}