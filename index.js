//  lets write the code to trigger the drop down button 
 let drop = document.querySelector("#second");
 let down =  document.querySelector("#Dropdown");
 drop.addEventListener("click" , function(){

 down.classList.toggle("show");

 });
//  button 2
let drop1 = document.querySelector("#first");
let down1 =  document.querySelector("#dropdown1");
drop1.addEventListener("click" , function(){

down1.classList.toggle("show");

});
//  lest turn the arrow down button toanarrow up button on click 
var rot = document.querySelector("#first");
let rotates=document.querySelector(".arrow");
rot.addEventListener("click" ,()=>{
    rotates.classList.toggle("arrow1");
})

var rot1 = document.querySelector("#second");
let rotate=document.querySelector(".arrows");
rot1.addEventListener("click" ,()=>{
    rotate.classList.toggle("arrow1");
})
