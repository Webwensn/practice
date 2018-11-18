/*window.onload=function(){

}*/
var oLi=document.getElementById("nav").getElementsByTagName("li");
var oDl=document.getElementsByTagName("dl");
var oImg=document.getElementById("img").getElementsByTagName("li");
var oLeft=document.getElementsByClassName("left");
var oRight=document.getElementsByClassName("right");
var n= 0;
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onmouseover=function(){
        for(var x=0;x<oLi.length;x++){
            oLi[x].className="";
            oDl[x].className="hide"
        }
        oLi[this.index].className="nav_hide"
        oDl[this.index].className="on"
    }
}
function huan(){
    for(var m=0;m<oImg.length;m++){
        oImg[m].className="hide";
    }
    if(n==oImg.length)n=0;
    oImg[n].className="on";
    for(var m=4;m<oImg.length;m++){
        oImg[m].className="hide";
    }
    if(n==oImg.length)n=0;
    oImg[n].className="on";
}
function play(){
    huan();
    n++;
}
timer=setInterval(play,1000);
for(var z=0;z<oDl.length;z++){
    oLeft[z].index=z;
    oLeft[z].onclick=function(){
        huan();
        n--;
        if(n==-1)n=3;
    }
    oRight[z].onclick=function(){
        huan();
         n++;
         if(n==oImg.length)n=0;
    }

}/*
for(var y=0;y<oDl.length;y++){

    oDl[y].onclick=function(){
        *//*clearInterval(timer);*//*
        alert();
        console.log(y);
    }
}*/


