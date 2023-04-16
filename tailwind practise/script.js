var toggle = document.getElementById("toggle")
var menu = document.getElementById("menu")

toggle.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
})