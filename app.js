const linkedin = document.getElementById("linkedin")
const github = document.getElementById("github")
const right = document.querySelector(".menu-right")
const spanList = document.querySelectorAll(".span")
const menuDesplegable = document.querySelector(".menu-desplegable")



linkedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/facundo-romano-a9b786129/")
})
github.addEventListener("click", ()=>{
    window.open("https://github.com/elRomanoff")
})
right.addEventListener("click", ()=>{
    menuDesplegable.classList.toggle("hidden")
})

const eng = document.currentScript.getAttribute("eng")

spanList.forEach(x => x.addEventListener("click", () => {
    x.parentNode.lastElementChild.classList.toggle("hidden");
    if (x.innerHTML === "Mostrar Detalles" || x.innerHTML==="Show Details"){
        if (eng) x.innerHTML = "Hide Details";
        else x.innerHTML = "Ocultar Detalles";
    }

    else {
        if(eng) x.innerHTML = "Show Details";
        else x.innerHTML = "Mostrar Detalles"
    }
}))


const uwu = "uwu"