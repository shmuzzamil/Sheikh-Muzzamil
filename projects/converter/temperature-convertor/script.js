const tempratureInK = document.getElementById('tempratureInK')
const tempratureInC = document.getElementById('tempratureInC')
const tempratureInF = document.getElementById('tempratureInF')

const selectTemprature = document.getElementById('select-temprature')

const convertButton = document.getElementById('convertButton')

function onConvert() {
    if (selectTemprature.value == 'K'){

        tempratureInC.value = parseFloat(tempratureInK.value) - 273.15
         tempratureInF.value = ( parseFloat(tempratureInK.value)  - 273.15) * 9 / 5 + 32
    }
    else if (selectTemprature.value == 'C'){

        tempratureInF.value = (parseFloat(tempratureInC.value)  * 9/5) + 32
        tempratureInK.value =  parseFloat(tempratureInC.value)  + 273.15
    }

    else if (selectTemprature.value == 'F'){
        tempratureInK.value = ( parseFloat(tempratureInF.value)- 32) *  5/9 + 273.15 
        tempratureInC.value = ( parseFloat(tempratureInF.value) - 32) * 5/9 
    }
}
function currentTemprature() {
    if (selectTemprature.value == 'K') {
        tempratureInF.disabled = true
        tempratureInC.disabled = true

        tempratureInK.disabled = false
    }
    else if (selectTemprature.value == 'C') {
        tempratureInF.disabled = true
        tempratureInK.disabled = true

        tempratureInC.disabled = false
    }
    else if (selectTemprature.value == 'F') {
        tempratureInC.disabled = true
        tempratureInK.disabled = true
        
        tempratureInF.disabled = false
    }
    else {

    }

    tempratureInF.value = 0
    tempratureInC.value = 0
    tempratureInK.value = 0
}
