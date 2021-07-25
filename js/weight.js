// WEIGHT CONVERTER

const weight_input_select = document.querySelector('.converter-weight .converter__input select')
const weight_input_text = document.querySelector('.converter-weight .converter__input input')

const weight_output_select = document.querySelector('.converter-weight .converter__output select')
const weight_output_text = document.querySelector('.converter-weight .converter__output input')

let weight_input = 7
let weight_output = 4



weight_input_select.value = weight_input
weight_output_select.value = weight_output
weight_input_text.value = "1"
weight_output_text.value = ""

let weight_bigger = true

let weight_multiplier = 0

const weight_constant = 10

weight_input_text.addEventListener('input', () => {
    if(isNaN(weight_input_text.value)) return
    weight_output_text.value = weight_convert(weight_input_text.value)
})

function weight_convert(value) {
    let weight_total = weight_bigger ? parseFloat(value) / Math.pow(weight_constant, weight_multiplier) : parseFloat(value) * Math.pow(weight_constant, weight_multiplier)
    return weight_total
}

weight_input_select.addEventListener('change', () => {
    weight_inputChanged()
})



function weight_inputChanged(){
    weight_input = parseInt(weight_input_select.value)
    weight_changed()
    if(isNaN(weight_input_text.value)) return
    weight_output_text.value = weight_convert(weight_input_text.value)
}

weight_output_select.addEventListener('change', () => {
    weight_outputChange()
})


function weight_outputChange(){
    weight_output = parseInt(weight_output_select.value)
    weight_changed()
    if(isNaN(weight_input_text.value)) return
    weight_output_text.value = weight_convert(weight_input_text.value)
}

function weight_changed(){
    weight_multiplier = Math.abs(weight_output - weight_input)
    weight_bigger = weight_output > weight_input
}

weight_changed()
weight_output_text.value = weight_convert(weight_input_text.value)
