const loader=document.getElementById("loading");
const Image=document.getElementById("image-div");
const butt=document.getElementById("button");
let count=0;
function getImage(){
    if(count==0){
        loader.classList.remove("hide");
    }
    if(count==100){
        Image.classList.remove("hide");
        loader.classList.add("hide");
        count=0;
        button.disabled=true;
        return;
    }
    count++;
    loader.innerText=`${count}%`;
    setTimeout(getImage,50);
}