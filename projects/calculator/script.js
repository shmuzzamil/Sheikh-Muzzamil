const inputField = document.getElementById('input-value')
const ACButton = document.getElementById('ac-button')
let currentOperator = null
let tempvalue = 0;

function onEqualTo() {
    if(currentOperator=='add'){
        tempvalue = parseFloat(tempvalue) + parseFloat(inputField.value)
    }
    else if(currentOperator=='minus'){
        tempvalue = parseFloat(tempvalue) - parseFloat(inputField.value)
    }
    else if(currentOperator=='multiply'){
        tempvalue = parseFloat(tempvalue) * parseFloat(inputField.value)
    }
    else if(currentOperator=='divide'){
        tempvalue = parseFloat(tempvalue) / parseFloat(inputField.value)
    }
    else if(currentOperator==null){
        tempvalue = inputField.value
    }
   
    inputField.value = parseFloat(tempvalue)
    // inputField.value = parseFloat(inputFsield.value).toPrecision(6)


    currentOperator = 'equal'
}

function onAddition() {

    if (tempvalue == 0 || currentOperator == 'equal') {
        tempvalue = inputField.value
    }
    else {
        tempvalue = parseFloat(tempvalue) + parseFloat(inputField.value)
    }

    inputField.value = 0

    console.log(tempvalue)
    currentOperator = 'add'
}

function onSubtraction() {

    if (tempvalue == 0 || currentOperator == 'equal') {
        tempvalue = inputField.value
    }
    else {
        tempvalue = parseFloat(tempvalue) - parseFloat(inputField.value)
    }

    inputField.value = 0

    console.log(tempvalue)
    currentOperator = 'minus'
}

function onMultiplication() {

    if (tempvalue == 0 || currentOperator == 'equal') {
        tempvalue = inputField.value
    }
    else {
        tempvalue = parseFloat(tempvalue) * parseFloat(inputField.value)
    }

    inputField.value = 0

    console.log(tempvalue)
    currentOperator = 'multiply'
}

function onDivision() {

    if (tempvalue == 0 || currentOperator == 'equal') {
        tempvalue = inputField.value
    }
    else {
        tempvalue = parseFloat(tempvalue) / parseFloat(inputField.value)
    }

    inputField.value = 0

    console.log(tempvalue)
    currentOperator = 'divide'
}


function EnterValue(value) {

    if (inputField.value == 0) {
        inputField.value = value

    }
    else if (currentOperator == 'equal') {
        tempvalue = 0
        inputField.value = value
        currentOperator = null
    }
    else {
        inputField.value = inputField.value + value
    }
    // if (currentOperator== 'equal') {
    //     inputField.value = value
    //     inputField.value = inputField.value + value
    // }
    console.log(inputField)
    updateACButton()
}

function ClearScreen() {
    inputField.value = 0
    updateACButton()
    tempvalue = 0

}

function updateACButton() {

    if (inputField.value != 0) {
        console.log(inputField.value)
        ACButton.innerText = 'C'
    }
    else {
        ACButton.innerText = 'AC'
    }
}
