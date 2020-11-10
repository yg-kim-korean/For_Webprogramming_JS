function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName"); //텍스트 필드내용 가져오기
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class","del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn)
    var newText = document.createTextNode(userName.value);//새 텍스트 노드만들기
    newP.appendChild(newText);//새로운 노드자식으로 연결

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP,nameList.childNodes[0]);
    //nameList.appendChild(newP);
    userName.value = "";

    var removeBttns = document.querySelectorAll(".del");

    for (var i = 0 ; i<removeBttns.length;i++){
        removeBttns[i].addEventListener("click",function(){
            if (this.parentNode.parentNode)//현재 노드의 부모노드의 부모노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode); // 현재노드의 부모노드의 부모노드를 찾아 현재 노드의 부모노드 삭제
        })
    }
}