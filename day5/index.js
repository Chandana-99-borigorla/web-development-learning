let count=0;

document.getElementById("mybtn1").onclick=function(){
    count++;
    document.getElementById("counterval").textContent=count;
}
document.getElementById("mybtn2").onclick=function(){
    count=0;
    document.getElementById("counterval").textContent=count;
}
document.getElementById("mybtn3").onclick=function(){
    count--;
    document.getElementById("counterval").textContent=count;
}