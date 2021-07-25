const menu_options = document.querySelectorAll('.menu__option')
const menu = document.querySelector('.menu')
const converters = document.querySelectorAll('.converter')

menu_options.forEach(function(element, index){
    element.addEventListener('click', () => {
        removeAllSelected()
        element.classList.add('selected')
        if(index < converters.length){
            removeAllConverters()
            converters[index].classList.add('converter-selected')
        }
    })
})

function removeAllSelected(){
    menu_options.forEach(element => {
        element.classList.remove('selected')
    })
}

function removeAllConverters(){
    converters.forEach(element => {
        element.classList.remove('converter-selected')
    })
}

menu.addEventListener('mouseover', () => {
    converters.forEach(element => {
        element.style.width = "calc(100% - var(--menu-width-hover) - var(--gap))"
    })
})

menu.addEventListener('mouseleave', () => {
    converters.forEach(element => {
        element.style = ""
    })
})