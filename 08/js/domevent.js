    var pic = document.querySelector('#pic');
    
		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic(){
      pic.src = "images/girl.png";
    }
    function drawBorder() {
      pic.style.border = "2px dotted #666";
    }
    pic.addEventListener("mouseover",changePic,false);
    pic.addEventListener("mouseout",originPic,false)