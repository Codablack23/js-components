const content = document.querySelector("#content")
const btn = document.querySelector("#open-menu-btn")
const sidebar = document.querySelector("#sidebar")

function toggleSideBar(){
    if(!sidebar.style.maxWidth){
        sidebar.style.width = "20%"
        sidebar.style.maxWidth = "20%"
        content.style.marginLeft = "25%"
    }else{
        sidebar.style.width = null
        sidebar.style.maxWidth = null
        content.style.marginLeft = "0%"  
    }
}

btn.addEventListener("click",toggleSideBar)