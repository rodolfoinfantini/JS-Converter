// TEMPERATURE CONVERTER

const temp_input_select = document.querySelector('.converter-temperature .converter__input select')
const temp_input_text = document.querySelector('.converter-temperature .converter__input input')

const temp_output_select = document.querySelector('.converter-temperature .converter__output select')
const temp_output_text = document.querySelector('.converter-temperature .converter__output input')

let temp_input = 1
let temp_output = 2



temp_input_select.value = temp_input
temp_output_select.value = temp_output
temp_input_text.value = "25"
temp_output_text.value = ""

let temp_bigger = true

let temp_multiplier = 0

const temp_constant = 10

temp_input_text.addEventListener('input', () => {
    if(isNaN(temp_input_text.value)) return
    temp_output_text.value = temp_convert(temp_input_text.value)
})

function temp_convert(value) {
    let temp_total = 0
    if(temp_input == temp_output){
        temp_total = parseFloat(value)
    }else if(temp_input == 1 && temp_output == 2){
        temp_total = value * 1.8 + 32
    }else if(temp_input == 1 && temp_output == 3){
        temp_total = parseFloat(value) + 273.15
    }else if(temp_input == 2 && temp_output == 1){
        temp_total = (parseFloat(value) - 32) / 1.8
    }else if(temp_input == 2 && temp_output == 3){
        temp_total = (parseFloat(value) - 32) * 5/9 + 273.15
    }else if(temp_input == 3 && temp_output == 1){
        temp_total = parseFloat(value) - 273.15
    }else if(temp_input == 3 && temp_output == 2){
        temp_total = (parseFloat(value) - 273.15) * 1.8 + 32
    }
    return temp_total
}

temp_input_select.addEventListener('change', () => {
    temp_inputChanged()
})



function temp_inputChanged(){
    temp_input = parseInt(temp_input_select.value)
    temp_changed()
    if(isNaN(temp_input_text.value)) return
    temp_output_text.value = temp_convert(temp_input_text.value)
}

temp_output_select.addEventListener('change', () => {
    temp_outputChange()
})


function temp_outputChange(){
    temp_output = parseInt(temp_output_select.value)
    temp_changed()
    if(isNaN(temp_input_text.value)) return
    temp_output_text.value = temp_convert(temp_input_text.value)
}

function temp_changed(){
    temp_multiplier = Math.abs(temp_output - temp_input)
    temp_bigger = temp_output > temp_input
}

temp_changed()
temp_output_text.value = temp_convert(temp_input_text.value)
