const list = document.querySelectorAll('.list');

function addTask() {
    const edit1 = document.querySelector('.edit1');
    const edit2 = document.querySelector('.edit2');

    const card = document.querySelector('.card');
    const add__card = document.querySelector('.add__card');
    const addBtn = document.querySelector('.add__item-btn');
    const cancelBtn = document.querySelector('.cancel__item-btn');
    const textarea = document.querySelector('.textarea');
    const form = document.querySelector('.form');

    const delete__card = document.querySelector('.delete__card');

    const arrow = document.querySelector('.arrow');
    const arrow2 = document.querySelector('.arrow2');

    const warning = document.querySelector('.warning');
    const warning2 = document.querySelector('.warning2');

    const cancel = document.querySelector('.cancel');
    const cancel2 = document.querySelector('.cancel2');

    const itemDeleteAll = document.querySelector('.itemDeleteAll');
    
    

    let value

    edit1.addEventListener('click', () => {
        card.style.display = 'block'
    })

    edit2.addEventListener('click', () => {
        card.style.display = 'block'
    })

    // card
    add__card.addEventListener('click', () => {
        form.style.display = 'block';
        add__card.style.display = 'none';
        addBtn.style.display = 'none';

        textarea.addEventListener('input', e => {
            value = e.target.value;

            if(value) {
                addBtn.style.display = 'block';
            } else {
                addBtn.style.display = 'none';
            }
        })
    })

    cancelBtn.addEventListener('click', () => {
        textarea.value = '';
        value = '';
        form.style.display = 'none';
        add__card.style.display = 'flex';
    })

    addBtn.addEventListener('click', () => {
        const newItem = document.createElement('div');
        newItem.classList.add('list__item');
        newItem.draggable = true;
        newItem.textContent = value;
        list[0].append(newItem);

        textarea.value = '';
        value = '';
        form.style.display = 'none';
        add__card.style.display = 'flex';
    })


    delete__card.addEventListener('click', () => {
        card.style.display = 'none'
    })

    arrow.addEventListener('click', () => {
        warning.style.display = 'block'
    })

    arrow2.addEventListener('click', () => {
        warning.style.display = 'block'
    })

    cancel.addEventListener('click', () => {
    value = ""
    warning.style.display = 'none'   
    })

    cancel2.addEventListener('click', () => {
    value = ""
    warning2.style.display = 'none'  
    })
    
    itemDeleteAll.addEventListener('click', () => {
        warning2.style.display = 'block';
    })

    

    
    
}

addTask();

