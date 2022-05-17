// const cards = document.querySelectorAll('card');

function addTask() {
    const add = document.querySelector('.add')
    const card = document.querySelector('.card')

    const arrow = document.querySelector('.arrow')
    const arrow2 = document.querySelector('.arrow2')
    const warning = document.querySelector('.warning')
    const warning2 = document.querySelector('.warning2')

    const edit1 = document.querySelector('.edit1')
    const edit2 = document.querySelector('.edit2')
    const card2 = document.querySelector('.card2')

    const itemDeleteAll = document.querySelector('.itemDeleteAll')
    
    
    add.addEventListener('click', () => {
        card.style.display = 'block'
        
    })

    arrow.addEventListener('click', () => {
        warning.style.display = 'block'
    })

    arrow2.addEventListener('click', () => {
        warning.style.display = 'block'
    })

    edit1.addEventListener('click', () => {
        card2.style.display = 'block'
    })

    edit2.addEventListener('click', () => {
        card2.style.display = 'block'
    })

    itemDeleteAll.addEventListener('click', () => {
        warning2.style.display = 'block'
    })
}

addTask()