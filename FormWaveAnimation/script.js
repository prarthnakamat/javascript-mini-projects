const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //splits each letter
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms">${letter}</span>`) //span around each letter
        .join('') //turns array back to string
})