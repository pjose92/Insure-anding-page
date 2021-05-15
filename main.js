const button = document.querySelector("#toggle")

button.addEventListener("click", () => {
    const nav = document.querySelector("nav")

    nav.classList.toggle("open")
})
