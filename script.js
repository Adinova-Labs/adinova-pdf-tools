console.log("Adinova PDF Loaded");

// ==========================
// NAV MENU TOGGLE
// ==========================
function toggleMenu(){
const nav = document.getElementById("navMenu");
if(nav){
nav.classList.toggle("active");
}
}

// ==========================
// AUTO CLOSE MENU (MOBILE)
// ==========================
document.addEventListener("DOMContentLoaded", function(){

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
const nav = document.getElementById("navMenu");
if(nav){
nav.classList.remove("active");
}
});
});

});


// ==========================
// COMMON ALERT HELPER
// ==========================
function showAlert(msg){
alert(msg);
}
