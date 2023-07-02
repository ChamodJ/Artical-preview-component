const optons = document.querySelector('.share-options-div')

document.querySelector('.share-img-div').addEventListener('click', ()=> {
    optons.classList.add('option-active')
})

document.querySelector('.close-icon').addEventListener('click', ()=> {
    optons.classList.remove('option-active')
})