  // Cargar el header
  fetch('componentes/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    
    //links highlight
    const navLinks = document.querySelectorAll('.nav a');
      const currentPage = window.location.pathname.split('/').pop();
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('nav__a--active');
        }
      });
    
    
    //Menu open and close
    const navOpenner = document.getElementById("nav__openner");
const navCloser = document.getElementById("nav__closer");
const nav = document.getElementById("nav");

navOpenner.addEventListener("click", ()=>{
    nav.classList.toggle("show");
    console.log("toco el navOpenner")
})
navCloser.addEventListener("click", ()=>{
    nav.classList.remove("show");
    
  });
  
  
})

// Cargar el footer
fetch('componentes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });