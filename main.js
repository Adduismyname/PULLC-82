canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mydrawing);
function mydrawing(e)                {                                 
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.getBoundingClientRect().left;
    mouseY=e.clientY-canvas.getBoundingClientRect().top;
    circle(mousex,mouseY);
    
}
function circle(mousex,mouseY){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(mousex,mouseY,40,0,2*Math.PI);
ctx.stroke();

}
function my_touchstart(e){

widthofline= document.getElementById("widthofline").value;
}
function cleararea(){
    ctx.clearRect(0, 0,ctx.canvas.width, ctx.canvas.height);
}
