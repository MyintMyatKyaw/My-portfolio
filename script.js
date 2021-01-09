// button structuring style
const navbar = document.querySelector(".navbar");
const menu =document.querySelector(".menu-list");
const threeBtn =document.querySelector(".three-btn");
const cancelBtn =document.querySelector(".cancel-btn");
threeBtn.onclick = () =>{
  menu.classList.add("active");
  threeBtn.classList.add("hide");
}
cancelBtn.onclick = () =>{
  menu.classList.remove("active");
  threeBtn.classList.remove("hide");
}
window.onscroll = function(){
  if(this.scrollY > 20){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}