function getInputFieldValueByID(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputAmount = inputField.value;
    inputField.value = '';
    return inputAmount;
}
function putElementValueById(updatedElementValueID,inputAmount){
    const updatedValue = document.getElementById(updatedElementValueID);
    updatedValue.innerText = parseFloat(updatedValue.innerText) + parseFloat(inputAmount);
}