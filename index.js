function init() {
    getName()
    getForcast()
    getLocation()
}

function getName() {
    if (!localStorage.getItem("name")) {
        localStorage.setItem("name", prompt("What's your name?"))
        return location.reload()
    }
    set("name", localStorage.getItem("name"))
}

function getLocation() {
    if (!localStorage.getItem("location")) {
        localStorage.setItem("location", prompt("Enter your location ie: Frankfurt, Germany"))
        return location.reload()
    }
}

function getForcast() {
    fetch("https://wttr.in/" + localStorage.getItem("location") + "?format=%c+%C\\%t\\%f")
        .then(d => d.text())
        .then(d => {
            d = d.split("\\")

            set("condition", d[0])
            set("temp", d[1])
            set("feel", d[2])
        })

}

init()

function set(id, innerText) {
    document.getElementById(id).setAttribute("aria-busy", false)
    document.getElementById(id).innerText = innerText
}

function href(link) {
    location.replace(link)
}
