const icon1 = document.getElementById("icon1")
const icon2 = document.getElementById("icon2")
const main = document.getElementsByTagName("main")
const nav = document.getElementsByTagName("nav")


icon1.addEventListener("click", () => {
    nav[0].classList.toggle("reduce")
    main[0].classList.toggle("reduce")
})

icon2.addEventListener("click", () => {
    nav[0].classList.toggle("show")
})