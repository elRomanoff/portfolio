const linkedin = document.getElementById("linkedin")
const github = document.getElementById("github")
const right = document.querySelector(".menu-right")
const spanList = document.querySelectorAll(".span")
const menuDesplegable = document.querySelector(".menu-desplegable")
const cv = document.getElementById("cv")
const eng = document.currentScript.getAttribute("eng")

if(eng){
    cv.href = "Curriculum vitae (1).pdf"
}else{
    cv.href = "cves.pdf"
}

linkedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/facundo-romano-a9b786129/")
})
github.addEventListener("click", ()=>{
    window.open("https://github.com/elRomanoff")
})
right.addEventListener("click", ()=>{
    menuDesplegable.classList.toggle("hidden")
})


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
