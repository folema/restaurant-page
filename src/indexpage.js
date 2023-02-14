const indexPage = ()=>{
    const page = document.createElement("div")
    const center = document.createElement("div")
    const hero = document.createElement("h2")
    const infoText = document.createElement("h3")
    const image = document.createElement("img")
    const footer = document.createElement ("div")
    const footerText = document.createElement("p")
    hero.textContent = "All natural eating since 2023"
    center.appendChild(hero)
    infoText.textContent = "Welcome to our lovely restaurant. Here you will find meals for every choice. Come on in!"
    center.appendChild(infoText)
    image.src = "../src/img/https---prod.static9.net.au-_-media-Network-Images-2017-07-12-11-08-170712coach_natural.jpg"
    center.appendChild(image)
    center.className = "center"
    page.appendChild(center)
    footerText.textContent = "This site is created using only natural javascript"
    footer.appendChild(footerText)
    footer.className = "footer"
    page.className = "page"
    page.appendChild(footer)



    return page
}
export default indexPage