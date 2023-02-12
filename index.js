function init() {
    getName()
    getForcast()
    getTheme()
}

function getName() {
    if (!localStorage.getItem("name")) {
        localStorage.setItem("name", prompt("What's your name?"))
        return location.reload()
    }
    set("name", localStorage.getItem("name"))
}

function getForcast() {
    fetch("https://wttr.in/?format=%c+%C\\%t\\%f")
        .then(d => d.text())
        .then(d => {
            d = d.split("\\")

            set("condition", d[0])
            set("temp", d[1])
            set("feel", d[2])
        })

}

function getTheme() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark")
    }
    document.getElementsByTagName("html")[0].setAttribute("data-theme", localStorage.getItem("theme"))
}

init()

function set(id, innerText) {
    document.getElementById(id).setAttribute("aria-busy", false)
    document.getElementById(id).innerText = innerText
}

function toggleTheme() {
    const theme = localStorage.getItem("theme")
    if (theme == "light") {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
    getTheme()
}

function href(link) {
    location.replace(link)
}