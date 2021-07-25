// DATA CONVERTER

const data_input_select = document.querySelector('.converter-data .converter__input select')
const data_input_text = document.querySelector('.converter-data .converter__input input')

const data_output_select = document.querySelector('.converter-data .converter__output select')
const data_output_text = document.querySelector('.converter-data .converter__output input')

let data_input = 2
let data_output = 1



data_input_select.value = data_input
data_output_select.value = data_output
data_input_text.value = "1"

let data_bigger = true

let data_multiplier = 0

const data_constant = 1024

data_input_text.addEventListener('input', () => {
    if(isNaN(data_input_text.value)) return
    data_output_text.value = data_convert(data_input_text.value)
})

function data_convert(value) {
    let data_total = data_bigger ? parseFloat(value) / Math.pow(data_constant, data_multiplier) : parseFloat(value) * Math.pow(data_constant, data_multiplier)
    return data_total
}

data_input_select.addEventListener('change', () => {
    data_inputChanged()
})



function data_inputChanged(){
    data_input = parseInt(data_input_select.value)
    data_changed()
    if(isNaN(data_input_text.value)) return
    data_output_text.value = data_convert(data_input_text.value)
}

data_output_select.addEventListener('change', () => {
    data_outputChange()
})


function data_outputChange(){
    data_output = parseInt(data_output_select.value)
    data_changed()
    if(isNaN(data_input_text.value)) return
    data_output_text.value = data_convert(data_input_text.value)
}

function data_changed(){
    data_multiplier = Math.abs(data_output - data_input)
    data_bigger = data_output > data_input
}

data_changed()
data_output_text.value = data_convert(data_input_text.value)
