function nW() {
 var lol = document.createElement(
  "p");
 var dad1 = document.getElementById(
  "nWList");
 lol.innerHTML = document.getElementById(
  "thing").value;
 dad1.appendChild(lol);
 lol.setAttribute("id","del");
 lol.setAttribute("onclick","delet(this)");
}
function urgent() {
    var lol = document.createElement(
     "p");
    var dad1 = document.getElementById(
     "urgentList");
    lol.innerHTML = document.getElementById(
     "thing").value;
    dad1.appendChild(lol);
    lol.setAttribute("id","del");
    lol.setAttribute("onclick","delet(this)");}

 function important() {
    var lol = document.createElement(
    "p");
    var dad1 = document.getElementById(
     "importantList");
    lol.innerHTML = document.getElementById(
     "thing").value;
    dad1.appendChild(lol);
    lol.setAttribute("id","del");
    lol.setAttribute("onclick","delet(this)");
  
   }

function delet(elemnt) {   
   elemnt.parentNode.removeChild(elemnt);
}
  
  
