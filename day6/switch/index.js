document.getElementById("mybtn").onclick=function(){
    let day=Number(document.getElementById("mybox").value);
switch(day){
    case 1:
        document.getElementById("myres").textContent="Monday";
        break;
    case 2:
          document.getElementById("myres").textContent="Tuesday";
        break;
    case 3:
        document.getElementById("myres").textContent="wednesday";
        break;
    case 4:
        document.getElementById("myres").textContent="Thursay";
        break;
    case 5:
         document.getElementById("myres").textContent="Friday";
        break;
    case 6:
         document.getElementById("myres").textContent="Saturday";
        break;
    case 7:
        document.getElementById("myres").textContent="Sunday";
        break;
    default:
         document.getElementById("myres").textContent="Wrong choice";
        break;

}
}