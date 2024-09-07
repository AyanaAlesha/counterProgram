
function countUp(){
    let previewText = document.getElementById("preview");
    let count = parseInt(previewText.innerHTML);
    count++;
    previewText.innerHTML = count;
}
function countDown(){
    let previewText = document.getElementById("preview");
    let decrease = parseInt(previewText.innerHTML);
    
    if(decrease > 0){
        decrease--;
    }
    previewText.innerHTML = decrease;
    
}
function reset(){
    document.getElementById("preview").innerHTML = "0";
}