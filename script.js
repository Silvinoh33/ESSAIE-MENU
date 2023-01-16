const hambugerButton = document.querySelector(".nav-toggler")
const navigatioin = document.querySelector("nav")

hambugerButton.addEventListener("click",toggleNav)

function toggleNav() {
    hambugerButton.classList.toggle("active")
    navigatioin.classList.toggle("active")
}