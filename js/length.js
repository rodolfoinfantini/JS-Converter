// LENGTH CONVERTER

const length_input_select = document.querySelector('.converter-length .converter__input select')
const length_input_text = document.querySelector('.converter-length .converter__input input')

const length_output_select = document.querySelector('.converter-length .converter__output select')
const length_output_text = document.querySelector('.converter-length .converter__output input')

let length_input = 4
let length_output = 2



length_input_select.value = length_input
length_output_select.value = length_output
length_input_text.value = "1"

let length_bigger = true

let length_multiplier = 0

const length_constant = 10

length_input_text.addEventListener('input', () => {
    if(isNaN(length_input_text.value)) return
    length_output_text.value = length_convert(length_input_text.value)
})

function length_convert(value) {
    let length_total = length_bigger ? parseFloat(value) / Math.pow(length_constant, length_multiplier) : parseFloat(value) * Math.pow(length_constant, length_multiplier)
    return length_total
}

length_input_select.addEventListener('change', () => {
    length_inputChanged()
})



function length_inputChanged(){
    length_input = parseInt(length_input_select.value)
    length_changed()
    if(isNaN(length_input_text.value)) return
    length_output_text.value = length_convert(length_input_text.value)
}

length_output_select.addEventListener('change', () => {
    length_outputChange()
})


function length_outputChange(){
    length_output = parseInt(length_output_select.value)
    length_changed()
    if(isNaN(length_input_text.value)) return
    length_output_text.value = length_convert(length_input_text.value)
}

function length_changed(){
    length_multiplier = Math.abs(length_output - length_input)
    length_bigger = length_output > length_input
}

length_changed()
length_output_text.value = length_convert(length_input_text.value)
