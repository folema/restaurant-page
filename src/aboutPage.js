import aboutText from "./aboutText"

const aboutPage = ()=>{
    const page = document.createElement("div")
    const center = document.createElement("div")
    const hero = document.createElement("h2")
    const about = document.createElement("h3")
    const chef = document.createElement("h4")
    const waiter = document.createElement("h4")
    const dishwasher = document.createElement("h4")
    const footer = document.createElement ("div")
    const footerText = document.createElement("p")
    hero.textContent = "Read along to find out more about our lovely restaurant"
    about.textContent = aboutText.about
    chef.textContent = aboutText.chef
    waiter.textContent = aboutText.waiter
    dishwasher.textContent = aboutText.dishwasher
    center.appendChild(hero)
    center.appendChild(about)
    center.appendChild(chef)
    center.appendChild(waiter)
    center.appendChild(dishwasher)
    center.className ="center"
    page.appendChild(center)
    footerText.textContent = "This site is created using only natural javascript"
    footer.appendChild(footerText)
    footer.className = "footer"
    page.appendChild(footer)
    page.className = "page"
    return page
}

export default aboutPage