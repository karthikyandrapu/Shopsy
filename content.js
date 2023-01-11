var imgslide = document.getElementById('imgslide');
var slides=['1.png','2.png', '3.png','4.png', 
  '5.png', '1.png', '2.png'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(imgslide);
    imgslide.innerHTML = "<img src="+slides[Start-1]+">";
}
setInterval(slider,2000);