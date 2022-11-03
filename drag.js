const box = document.querySelector(".box")
const canvas = document.querySelector(".canvas")

canvas.addEventListener("click",(e)=>{
    box.style.left = `${e.clientX - 50}px`
    box.style.top = `${e.clientY - 50}px`
})


