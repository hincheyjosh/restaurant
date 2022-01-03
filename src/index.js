import './style.css'

function createHeader() {
    const header = document.createElement("header")
   
    const h1 = document.createElement("h1")
    h1.innerHTML = "Josh's Bar and Grill"
    h1.classList = "title"
    header.appendChild(h1)

    const nav = document.createElement("nav")
    const menuOptions = ["Home", "Menu", "Contact"]
    menuOptions.forEach(option => {
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
