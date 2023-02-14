const header = ()=>{
    const headerDiv = document.createElement("div")
    const title = document.createElement("h1")
    const uList = document.createElement("ul")
    const about = document.createElement("li")
    const menu = document.createElement("li")
    const contact = document.createElement("li")
    const home = document.createElement("li")
    title.textContent = "All Natural Eating"
    title.className = "title"
    title.id = "title"
    about.textContent = "About"
    about.id = "about"
    menu.textContent = "Menu"
    menu.id = "menu"
    contact.id = "contact"
    contact.textContent = "Contact"
    home.textContent = "Home"
    home.id = "home"
    headerDiv.appendChild(title)
    uList.appendChild(about)
    uList.appendChild(menu)
    uList.appendChild(contact)
    uList.appendChild(home)
    headerDiv.appendChild(uList)
    headerDiv.className="header" 
    return headerDiv
}

export default header