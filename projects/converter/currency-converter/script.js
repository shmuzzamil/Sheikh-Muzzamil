// const currencyInPkr = document.getElementById('currencyInPkr')
// const currencyInUsd = document.getElementById('currencyInUsd')
// const currencyInind = document.getElementById('currencyInind')

// const selectCurrency = document.getElementById('select-currency')

// const convertButton = document.getElementById('convertButton')

// function onConvert() {
//     if (selectCurrency.value == 'P'){

//         currencyInUsd.value = parseFloat(currencyInPkr.value) * 0.0036
//         currencyInind.value= parseFloat(currencyInPkr.value) * 0.30
//     }

//     else if (selectCurrency.value == 'U'){

//         currencyInind.value = parseFloat(currencyInUsd.value)  * 83.88
//         currencyInPkr.value =  parseFloat(currencyInUsd.value)  * 277.45
//     }

//     else if (selectCurrency.value == 'I'){
//         currencyInPkr.value =  parseFloat(currencyInind.value) * 3.31
//         currencyInUsd.value = parseFloat(currencyInind.value) * 0.012
//     }
// }
// function currentCurrency() {
//     if (selectCurrency.value == 'P') {
//         currencyInind.disabled = true
//         currencyInUsd.disabled = true

//         currencyInPkr.disabled = false
//     }
//     else if (selectCurrency.value == 'U') {
//         currencyInind.disabled = true
//         currencyInPkr.disabled = true

//         currencyInUsd.disabled = false
//     }
//     else if (selectCurrency.value == 'I') {
//         currencyInUsd.disabled = true
//         currencyInPkr.disabled = true

//         currencyInind.disabled = false
//     }
//     else {

//     }
//     currencyInind.value = 0
//     currencyInUsd.value = 0
//     currencyInPkr.value = 0
// }
const fromSelectBox = document.getElementById('from-select-box')
const toSelectBox = document.getElementById('to-select-box')

const fromConvert = document.getElementById('from-convert')
const toConvert = document.getElementById('to-convert')

const convertButton = document.getElementById('on-convert')

function onConvert() {
    if (fromSelectBox.value == 'PKR') {

        if (toSelectBox.value == 'PKR') {
            toConvert.value = fromConvert.value
        }
        else if (toSelectBox.value == 'USD') {
            toConvert.value = fromConvert.value * 0.0036
        }
        else if (toSelectBox.value == 'INR') {
            toConvert.value = fromConvert.value * 0.3
        }
       
    }

    else if (fromSelectBox.value == 'USD') {

        if (toSelectBox.value == 'PKR') {
            toConvert.value = fromConvert.value * 278.25
        }
        else if (toSelectBox.value == 'USD') {
            toConvert.value = fromConvert.value
        }
        else if (toSelectBox.value == 'INR') {
            toConvert.value = fromConvert.value * 83.79
        }
       
    }

    else if (fromSelectBox.value == 'INR') {

        if (toSelectBox.value == 'PKR') {
            toConvert.value = fromConvert.value * 3
        }
        else if (toSelectBox.value == 'USD') {
            toConvert.value = fromConvert.value
        }
        else if (toSelectBox.value == 'INR') {
            toConvert.value = fromConvert.value * 0.012
        }
    
    }
    else {

    }  
    
}
function onChoice() {
    fromConvert.value = 1
    onConvert()

}