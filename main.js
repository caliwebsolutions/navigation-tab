const contentContainer=document.querySelector(".contentContainer")
const contentBody=document.querySelectorAll(".contentBody")
const tab=document.querySelectorAll(".tab")

function checkContent(n){
    const newBody=contentBody[n-1].classList.remove("noDisplay")
    if(contentContainer.children != contentBody[n-1]){
        for(i=0; i<contentBody.length; i++){
            contentBody[i].classList.add("noDisplay")
            tab[i].classList.remove("activeTab")
        }
        contentBody[n-1].classList.remove("noDisplay")
        tab[n-1].classList.add("activeTab")
    }
}

tab.forEach((e)=>{
    const activeTab=(e.innerHTML.split("Tab")).toString()[1]
    e.addEventListener("click",function(){
        checkContent(activeTab)
    })
})