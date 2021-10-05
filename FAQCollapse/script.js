const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


// const down = document.querySelector('.fa-chevron-down')
// const close = document.getElementsByClassName('.fa-times')

// down.addEventListener("click", () => {
//     document.getElementsByClassName('faq').classList.add('active')
// })

// close.addEventListener("click", () => {
//     document.getElementsByClassName('faq').classList.remove('active')
// })S