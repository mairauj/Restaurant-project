function navBarBg() {
  let nav = document.querySelector("#nav-container");
  let currentHeight = window.scrollY;
  if (currentHeight > 30) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
}

window.addEventListener("scroll", navBarBg);

const hamburger = document.querySelector(".hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
})

if (hamburger.classList.contains("active")) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  })
}


function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      reveals[i].classList.add("revealed");
    } else {
      reveals[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", reveal);


let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.open('./index.html', '_self');
})