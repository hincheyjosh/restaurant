import './style.css'
import chefPhoto from "./chefPhoto.jpg"
import createMenuContent from "./menuPage.js"
import createContactContent from './contactPage.js'

const navOptions = ["Home", "Menu", "Contact"]

function createHeader() {
    const header = document.createElement("header")
   
    const h1 = document.createElement("h1")
    h1.innerHTML = "Joshua's Bar and Grill"
    h1.classList = "title"
    header.appendChild(h1)

    const nav = document.createElement("nav")
    navOptions.forEach(option => {
        nav.innerHTML += `<li class="navItem" id="${option}">${option}</li>`
    })

    header.appendChild(nav)
    return header
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.innerHTML = "Made with &#128420; by Joshua Hinchey."
    return footer
}

function createHomeContent() {
    content.innerHTML = ""
    const mainContainer = document.createElement("div")
    mainContainer.classList = "mainContainer"

    const photo = new Image()
    photo.src = chefPhoto
    photo.classList = "chefPhoto"
    mainContainer.appendChild(photo)

    const paragraph = document.createElement("p")
    paragraph.textContent = `Vivamus faucibus dignissim vehicula. Nullam non augue massa. Donec et viverra tortor. In hac habitasse platea dictumst. Pellentesque convallis neque sit amet tellus rhoncus, in suscipit magna ultricies. Nulla facilisi. Donec vel mi ut ligula porta mattis in in lectus. Morbi varius finibus bibendum. Pellentesque at dui lacinia, vulputate dui id, aliquam ipsum. Aenean metus est, sagittis vel ante sagittis, ornare viverra arcu.`
    mainContainer.appendChild(paragraph)

    const ul = document.createElement("ul")
    ul.innerHTML = `<li><h4>Hours of Operation</h4></li>
                    <li>Mon 10am - 10pm</li>
                    <li>Tues 10am - 10pm</li>
                    <li>Wed 10am - 10pm</li>
                    <li>Thurs 10am - 10pm</li>
                    <li>Fri 10am - 12pm</li>
                    <li>Sat 10am - 12pm</li>
                    <li>Sun 10am - 10pm</li>`
    mainContainer.appendChild(ul)

    return mainContainer
}



// Set up main container for header, footer, and main content
const container = document.createElement("div")
container.classList = 'container'
document.body.appendChild(container)

// Add header to container
container.appendChild(createHeader())

// Set up div for main content and add to page
const content = document.createElement("div")
content.classList = "content"
container.appendChild(content)

// Add footer to container
container.appendChild(createFooter())

// Load main page content upon page load
content.appendChild(createHomeContent())

document.getElementById("Menu").addEventListener("click", createMenuContent)
document.getElementById("Home").addEventListener("click", function () {
    content.appendChild(createHomeContent())
})
document.getElementById("Contact").addEventListener("click", function () {
    content.appendChild(createContactContent())
})

