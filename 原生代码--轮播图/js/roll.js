window.onload= function () {

    (function(){
        var oMain=document.getElementById("container");
        var oImg=document.getElementById("imgs").getElementsByTagName("img");
        var oLi=document.getElementById("nav").getElementsByTagName("li");
        var oLeft=document.getElementById("left");
        var oRight=document.getElementById("right");
        var num=0;
        var timer=null;
        for(var i=0;i<oLi.length;i++){
            oLi[i].index=i;
            oLi[i].onmouseover=function(){
                num=this.index;
                play();
            }
        }
        function huan(){
            for(var i=0;i<oImg.length;i++){
                oImg[i].className=""
                oLi[i].className=""
            }
            if(num==oImg.length) num=0;
            oImg[num].className="on"
            oLi[num].className="on"
        }
        function play(){
            huan();
            num++;
        }
        go();
        function go(){//封装函数
            timer=setInterval(play,1000);
        }
        oMain.onmouseover=function(){
            clearInterval(timer);
        }
        oMain.onmouseout=function(){
            go();
        }

        oLeft.onclick=oRight.onclick=function(){
            if(this==oLeft){
                num--;
                if(num==-1) num=3;
            }else{
                if(num==oImg.length) num=0;
                num++;
            }
            huan();
        }
    })();
}