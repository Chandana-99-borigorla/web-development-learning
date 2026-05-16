
const PI= 3.414;
let radius;
let circum;
document.getElementById("mybtn").onclick=function(){
    radius=document.getElementById("myrad").value;
    radius = Number(radius);
    circum= 2 * PI * radius;
  
    document.getElementById("myh3").textContent=circum  + "cm";
}