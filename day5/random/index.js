let mybtn=document.getElementById("mybtn");
let randomnum;
mybtn.onclick=function(){
     randomnum=Math.random();
     document.getElementById("mylabel").textContent=randomnum;
}

