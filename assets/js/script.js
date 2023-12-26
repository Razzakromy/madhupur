$(document).ready(function () {
  // Light Dark Mode
  const checkbox = document.getElementById("checkbox")
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
  })

});

// Preloader
 var preLoader;

 function preLoader(){
   preLoader = setTimeout(showPage, 30);
 }

 function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("preLoader").style.display = "block";
 }

 //AOS
 AOS.init();