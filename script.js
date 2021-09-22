const panels = document.querySelectorAll('.panel'); //all panels in nodelist

//for each panel that is clicked, active class is added
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active') //on click, add active class
    })
});

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active'); //to remove all active classes so that only one div is expanded
    })
}
