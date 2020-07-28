var btnsOpen = document.querySelectorAll(".open");
var btnClose = document.getElementById("close");
var modal = document.getElementById("modal");

btnsOpen.forEach(btn=>{
  btn.onclick = function(){
  modal.style.display = "block";
  document.getElementById("overlay").style.display = "block";
 }
});


btnClose.onclick = function(){
  modal.style.display = "none";
  document.getElementById("overlay").style.display = "none";
}