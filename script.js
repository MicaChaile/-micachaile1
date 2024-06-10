fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

function openFulImg(pic){
    fulImgBox.style.display = "flex";
    fulImg.src = pic;
}
function closeImg(){
    fulImgBox.style.display = "none";
}