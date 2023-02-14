import header from "./header";
import indexPage from "./indexpage";
import aboutPage from "./aboutPage";
import aboutText from "./aboutText";
const content = document.getElementById("content")
content.appendChild(header())
content.appendChild(indexPage())
const title = document.getElementById("title")
const about = document.getElementById("about")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")
const home = document.getElementById("home")


const clear = ()=>{
    let currentPage = document.querySelector(".page")
    content.removeChild(currentPage)
}
home.addEventListener("click", ()=>{
    clear()
    content.appendChild(indexPage())
})
about.addEventListener("click", ()=>{
    clear()
    content.appendChild(aboutPage())
})
title.addEventListener("click", ()=>{
    clear()
    content.appendChild(indexPage())
})
menu.addEventListener("click", ()=>{
    alert("menu")
})
contact.addEventListener("click", ()=>{
    alert("contact")
})
