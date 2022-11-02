const modal = document.querySelector("#modal")
const cancel = document.querySelector("#cancel")
const openModal = document.querySelector(".open-modal")

const showModal = function(){
    //modal.style.transform = "scale(1)"
     modal.style.opacity = 1
     modal.style.zIndex = 10;
//    modal.style.display = "flex"
}
const hideModal = function(){
    //modal.style.transform = "scale(1)"
     modal.style.opacity = 0;
     modal.style.zIndex = -1;
//    modal.style.display = "flex"
}
setTimeout(showModal,2000)

cancel.addEventListener('click',hideModal)
openModal.addEventListener('click',showModal)