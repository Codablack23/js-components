const allAccordion = document.querySelectorAll(".accordion")

function toggleAccordion(btn,content){
  btn.addEventListener('click',function(){
    console.log(content)
    if(!content.style.maxHeight){
        content.style.maxHeight = '50vh'
        btn.classList.add("bi-dash-lg")
        btn.classList.remove("bi-plus-lg")
    }
    else{
        content.style.maxHeight = null
        btn.classList.remove("bi-dash-lg")
        btn.classList.add("bi-plus-lg")
    }
  })
}

for (const accordion of allAccordion) {
    const btn = accordion.querySelector(`#accordion-btn`)
    const content = accordion.querySelector(`#accordion-body`)

    toggleAccordion(btn,content)
}

