let logopage=document.getElementById("logo-page");
let homepage=document.getElementById("home-page");
let dressespage=document.getElementById("dresses-page");
let clothespage=document.getElementById("clothes-page");
let shoespage=document.getElementById("shoes-page");
let name=document.getElementById("display-name");
name.textContent = localStorage.getItem("newuser");
function logout() {
    window.location.href = "indexpage.html"; 
}