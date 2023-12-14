const observer = new IntersectionObserver((entreis) => {
    entreis.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('shown-stack-item')
        } else {
            entry.target.classList.remove('shown-stack-item')
        }
    })
})

const hiddenElements = document.querySelectorAll('hidden-stack-item');
hiddenElements.forEach((el) => observer.observe(el));